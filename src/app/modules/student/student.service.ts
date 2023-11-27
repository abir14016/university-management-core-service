import { Student } from '@prisma/client';
import prisma from '../../../shared/prisma';

//service for inserting a student inton DB
const insertIntoDB = async (data: Student): Promise<Student> => {
  const result = await prisma.student.create({
    data,
    include: {
      academicFaculty: true,
      academicDepartment: true,
      academicSemester: true,
    },
  });
  return result;
};

export const StudentService = {
  insertIntoDB,
};
