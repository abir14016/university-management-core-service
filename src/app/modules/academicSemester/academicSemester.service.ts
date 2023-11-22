import { AcademicSemester, PrismaClient } from '@prisma/client';

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

export const AcademicSemesterService = {
  insertIntoDB,
};
