import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('college_placement')
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  college_id: number;

  @Column()
  year: number;

  @Column({ type: 'decimal', nullable: true })
  highest_placement: number;

  @Column({ type: 'decimal', nullable: true })
  average_placement: number;

  @Column({ type: 'decimal', nullable: true })
  median_placement: number;

  @Column({ type: 'decimal', nullable: true })
  placement_rate: number;
}
