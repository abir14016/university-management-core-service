import { AcademicSemester, Prisma } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { RedisClient } from '../../../shared/redis';
import {
  AcademicSemesterSearchableFields,
  EVENT_ACADEMIC_SEMESTER_CREATED,
  academicSemesterTitleCodeMapper,
} from './academicSemester.constants';
import { IAcademicSemesterFilterRequest } from './academicSemester.interface';

//service for creating an academic semester
const insertIntoDB = async (
  academicSemesterData: AcademicSemester
): Promise<AcademicSemester> => {
  //check whwater the provided code is valid or invalid
  if (
    academicSemesterTitleCodeMapper[academicSemesterData.title] !==
    academicSemesterData.code
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }

  const result = await prisma.academicSemester.create({
    data: academicSemesterData,
  });

  if (result) {
    await RedisClient.publish(
      EVENT_ACADEMIC_SEMESTER_CREATED,
      JSON.stringify(result)
    );
  }

  return result;
};

//service for getting all academic semesters with searching and filtering
const getAllFromDB = async (
  filters: IAcademicSemesterFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<AcademicSemester[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: AcademicSemesterSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditons: Prisma.AcademicSemesterWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.academicSemester.findMany({
    where: whereConditons,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });

  const total = await prisma.academicSemester.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

//service for getting single academic semester by id
const getByIdFromDB = async (id: string): Promise<AcademicSemester | null> => {
  const result = await prisma.academicSemester.findUnique({
    where: {
      id,
    },
  });

  return result;
};

//service for updating an academic semester by id
const updateOneInDB = async (
  id: string,
  payload: Partial<AcademicSemester>
): Promise<AcademicSemester> => {
  const result = await prisma.academicSemester.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

//service for deleting an academic semester by id
const deleteByIdFromDB = async (id: string): Promise<AcademicSemester> => {
  const result = await prisma.academicSemester.delete({
    where: {
      id,
    },
  });
  return result;
};

export const AcademicSemesterService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
