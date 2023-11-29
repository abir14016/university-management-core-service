import { z } from 'zod';

//zod validation for creating a room
const create = z.object({
  body: z.object({
    roomNumber: z.string({
      required_error: 'Room number is required',
    }),
    floor: z.string({
      required_error: 'Floor is required',
    }),
    buildingId: z.string({
      required_error: 'Building id is required',
    }),
  }),
});

//zod validation for updating a room
const update = z.object({
  body: z.object({
    roomNumber: z.string().optional(),
    floor: z.string().optional(),
    buildingId: z.string().optional(),
  }),
});

export const RoomValidation = {
  create,
  update,
};
