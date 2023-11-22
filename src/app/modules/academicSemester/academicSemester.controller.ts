import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';

//controller for creating an academic semester
const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.insertIntoDB(req.body);
  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created !!',
    data: result,
  });
});

//controller for getting all academic semesters
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.getAllFromDB();
  sendResponse<AcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created !!',
    meta: result.meta,
    data: result.data,
  });
});

export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
};
