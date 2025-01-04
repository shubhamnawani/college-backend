// src/college/college.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegeService } from './college.service';
import { CollegeController } from './college.controller';
import { CollegePlacement } from '../entities/college-placement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CollegePlacement])],  // Ensure this line is added
  providers: [CollegeService],
  controllers: [CollegeController],
})
export class CollegeModule {}
