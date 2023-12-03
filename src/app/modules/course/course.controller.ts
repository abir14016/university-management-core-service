import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CourseService } from './course.service';

//controller for creating a course
const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.inserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created successfully !',
    data: result,
  });
});

export const CourseController = {
  insertIntoDB,
};
