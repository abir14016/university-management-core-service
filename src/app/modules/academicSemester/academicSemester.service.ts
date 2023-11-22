import { AcademicSemester, PrismaClient } from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';

const prisma = new PrismaClient();

//service for creating an academic semester
const insertIntoDB = async (
  academicSemesterData: AcademicSemester
): Promise<AcademicSemester> => {
  const result = await prisma.academicSemester.create({
    data: academicSemesterData,
  });

  return result;
};

//service for getting all academic semesters
const getAllFromDB = async (): Promise<
  IGenericResponse<AcademicSemester[]>
> => {
  const result = await prisma.academicSemester.findMany();
  const total = await prisma.academicSemester.count();

  return {
    meta: {
      total,
      page: 1,
      limit: 10,
    },
    data: result,
  };
};

export const AcademicSemesterService = {
  insertIntoDB,
  getAllFromDB,
};
