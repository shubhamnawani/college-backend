import { Controller, Get, Param, Query } from '@nestjs/common';
import { CollegeService } from './college.service';

@Controller()
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get('college_data/:collegeId/avg_section')
  getAvgPlacementData(@Param('collegeId') collegeId: number) {
    return this.collegeService.getAvgPlacementData(collegeId);
  }

  @Get('college_data/:collegeId/placement_section')
  getPlacementData(@Param('collegeId') collegeId: number) {
    return this.collegeService.getPlacementData(collegeId);
  }

  @Get('college_courses/:collegeId')
  getCoursesByCollegeId(@Param('collegeId') collegeId: number) {
    return this.collegeService.getCoursesByCollegeId(collegeId);
  }

  @Get('colleges')
  getColleges(@Query('city') cityId: number, @Query('state') stateId: number) {
    if (cityId) {
      return this.collegeService.getCollegesByCity(cityId);
    } else if (stateId) {
      return this.collegeService.getCollegesByState(stateId);
    } else {
      return [];
    }
  }
}
