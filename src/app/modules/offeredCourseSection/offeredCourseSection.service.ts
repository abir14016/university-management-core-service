import { OfferedCourseSection } from '@prisma/client';
import prisma from '../../../shared/prisma';

//service for creating offeredCourseSection
const insertIntoDB = async (
  data: OfferedCourseSection
): Promise<OfferedCourseSection> => {
  const result = prisma.offeredCourseSection.create({
    data,
  });

  return result;
};

export const OfferedCourseSectionService = {
  insertIntoDB,
};
