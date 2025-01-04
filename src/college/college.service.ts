import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegePlacement } from '../entities/college-placement.entity';
import { CollegeWiseCourse } from '../entities/college-wise-course.entity';
import { College } from '../entities/college.entity';

@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(CollegePlacement)
    private readonly placementRepository: Repository<CollegePlacement>,
    @InjectRepository(CollegeWiseCourse)
    private readonly courseRepository: Repository<CollegeWiseCourse>,
    @InjectRepository(College)
    private readonly collegeRepository: Repository<College>,
  ) {}

  async getAvgPlacementData(collegeId: number) {
    const placements = await this.placementRepository
      .createQueryBuilder('placement')
      .select('placement.year', 'year')
      .addSelect('AVG(placement.highest_placement)', 'avg_highest_placement')
      .addSelect('AVG(placement.average_placement)', 'avg_average_placement')
      .addSelect('AVG(placement.median_placement)', 'avg_median_placement')
      .addSelect('AVG(placement.placement_rate)', 'avg_placement_rate')
      .where('placement.college_id = :collegeId', { collegeId })
      .andWhere('placement.highest_placement IS NOT NULL AND placement.highest_placement != 0')
      .andWhere('placement.average_placement IS NOT NULL AND placement.average_placement != 0')
      .andWhere('placement.median_placement IS NOT NULL AND placement.median_placement != 0')
      .andWhere('placement.placement_rate IS NOT NULL AND placement.placement_rate != 0')
      .groupBy('placement.year')
      .getRawMany();

    return placements;
  }

  async getPlacementData(collegeId: number) {
    const placements = await this.placementRepository.find({
      where: { college_id: collegeId },
      order: { year: 'ASC' },
    });

    // Calculate placement trend
    placements.forEach((placement, index) => {
      if (index > 0) {
        const prevRate = placements[index - 1].placement_rate;
        placement['placement_trend'] =
          placement.placement_rate > prevRate ? 'UP' : 'DOWN';
      }
    });

    return placements.filter(
      (placement) =>
        placement.highest_placement !== null &&
        placement.highest_placement !== 0 &&
        placement.average_placement !== null &&
        placement.average_placement !== 0 &&
        placement.median_placement !== null &&
        placement.median_placement !== 0 &&
        placement.placement_rate !== null &&
        placement.placement_rate !== 0,
    );
  }

  async getCoursesByCollegeId(collegeId: number) {
    return this.courseRepository.find({
      where: { college_id: collegeId },
      order: { course_fee: 'DESC' },
    });
  }

  async getCollegesByCity(cityId: number) {
    return this.collegeRepository.find({ where: { city_id: cityId } });
  }

  async getCollegesByState(stateId: number) {
    return this.collegeRepository.find({ where: { state_id: stateId } });
  }
}
