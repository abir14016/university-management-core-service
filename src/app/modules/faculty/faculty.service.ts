import { Faculty } from '@prisma/client';
import prisma from '../../../shared/prisma';

//service for inserting a faculty into DB
const insertIntoDB = async (data: Faculty): Promise<Faculty> => {
  const result = await prisma.faculty.create({
    data,
    include: {
      academicFaculty: true,
      academicDepartment: true,
    },
  });
  return result;
};

export const FacultyService = {
  insertIntoDB,
};
