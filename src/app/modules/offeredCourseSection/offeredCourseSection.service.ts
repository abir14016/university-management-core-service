/* eslint-disable @typescript-eslint/no-explicit-any */
import { OfferedCourseSection } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

//service for creating offeredCourseSection
const insertIntoDB = async (data: any): Promise<OfferedCourseSection> => {
  const isExistOfferedCourse = await prisma.offeredCourse.findFirst({
    where: {
      id: data.offeredCourseId,
    },
  });

  if (!isExistOfferedCourse) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Offered Course does not exist!'
    );
  }

  data.semesterRegistrationId = isExistOfferedCourse.semesterRegistrationId;

  const result = await prisma.offeredCourseSection.create({
    data,
  });

  return result;
};

export const OfferedCourseSectionService = {
  insertIntoDB,
};
