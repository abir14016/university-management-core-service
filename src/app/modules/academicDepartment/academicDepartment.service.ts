import { AcademicDepartment } from '@prisma/client';
import prisma from '../../../shared/prisma';

//service for creating an academic department
const insertIntoDB = async (
  data: AcademicDepartment
): Promise<AcademicDepartment> => {
  const result = await prisma.academicDepartment.create({
    data,
    include: {
      academicFaculty: true,
    },
  });

  return result;
};

export const AcademicDepartmentService = {
  insertIntoDB,
};
