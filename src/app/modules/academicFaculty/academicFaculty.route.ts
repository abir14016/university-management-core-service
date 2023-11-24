import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

//route for creating an academic faculty
router.post(
  '/',
  validateRequest(AcademicFacultyValidation.create),
  AcademicFacultyController.insertIntoDB
);

//route for getting all academic faculties
router.get('/', AcademicFacultyController.getAllFromDB);

export const AcademicFacultyRoutes = router;
