import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('college_wise_course')
export class CollegeWiseCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  college_id: number;

  @Column()
  course_name: string;

  @Column()
  course_duration: number;

  @Column()
  course_fee: number;
}
