import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();
//route for creating an academic department
router.post(
  '/',
  validateRequest(AcademicDepartmentValidation.create),
  AcademicDepartmentController.insertIntoDB
);

// controller for retriving all academic departments with searching, filtering, pagination and sorting
router.get('/', AcademicDepartmentController.getAllFromDB);

// route for getting single academic department by id
router.get('/:id', AcademicDepartmentController.getByIdFromDB);

export const academicDepartmentRoutes = router;
