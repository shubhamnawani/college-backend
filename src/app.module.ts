import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegeController } from './college/college.controller';
import { CollegeService } from './college/college.service';
import { College } from './entities/college.entity';
import { CollegePlacement } from './entities/college-placement.entity';
import { CollegeWiseCourse } from './entities/college-wise-course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [College, CollegePlacement, CollegeWiseCourse],
      synchronize: false, 
    }),
    TypeOrmModule.forFeature([College, CollegePlacement, CollegeWiseCourse]),
  ],
  controllers: [CollegeController],
  providers: [CollegeService],
})
export class AppModule {}
