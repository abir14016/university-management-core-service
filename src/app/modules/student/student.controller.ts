import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { StudentService } from './student.service';

// controller for inserting a student inton DB
const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully !',
    data: result,
  });
});

export const StudentController = {
  insertIntoDB,
};
