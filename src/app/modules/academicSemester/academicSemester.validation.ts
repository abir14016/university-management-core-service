import { z } from 'zod';

// zod validation for creating an academic semester
const create = z.object({
  body: z.object({
    year: z.number({
      required_error: 'year is required',
    }),
    title: z.string({
      required_error: 'title is required',
    }),
    code: z.string({
      required_error: 'code is required',
    }),
    startMonth: z.string({
      required_error: 'start month is required',
    }),
    endMonth: z.string({
      required_error: 'end month is required',
    }),
  }),
});

// zod validation for updating an academic semester by id
const update = z.object({
  body: z.object({
    title: z.string().optional(),
    code: z.string().optional(),
    year: z.number().optional(),
    startMonth: z.string().optional(),
    endMonth: z.string().optional(),
  }),
});

export const AcademicSemesterValidation = {
  create,
  update,
};
