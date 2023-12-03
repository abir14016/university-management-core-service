import { Course } from '@prisma/client';
import prisma from '../../../shared/prisma';

//service for creating a course
const inserIntoDB = async (data: Course): Promise<Course> => {
  const result = await prisma.course.create({
    data,
  });

  return result;
};

export const CourseService = {
  inserIntoDB,
};
