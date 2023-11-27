import { z } from 'zod';

//zod validation for creating an academic department
const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    academicFacultyId: z.string({
      required_error: 'Academic faculty id is required',
    }),
  }),
});

export const AcademicDepartmentValidation = {
  create,
};
