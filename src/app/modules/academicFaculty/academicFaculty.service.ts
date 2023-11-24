import { AcademicFaculty } from '@prisma/client';
import prisma from '../../../shared/prisma';

//service for creating an academic faculty
const insertIntoDB = async (
  academicFacultyData: AcademicFaculty
): Promise<AcademicFaculty> => {
  const result = await prisma.academicFaculty.create({
    data: academicFacultyData,
  });

  return result;
};

//service for getting all faculties
const getAllFromDB = async () => {
  const result = await prisma.academicFaculty.findMany();
  return result;
};

export const AcademicFacultyService = {
  insertIntoDB,
  getAllFromDB,
};
