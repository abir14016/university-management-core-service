import { z } from 'zod';

//zod validation for creating an academic faculty
const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

//zod validation for updating an academic faculty
const update = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

export const AcademicFacultyValidation = {
  create,
  update,
};
