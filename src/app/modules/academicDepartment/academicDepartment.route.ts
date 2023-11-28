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

// route for retriving all academic departments with searching, filtering, pagination and sorting
router.get('/', AcademicDepartmentController.getAllFromDB);

// route for getting single academic department by id
router.get('/:id', AcademicDepartmentController.getByIdFromDB);

//route for updating an academic department
router.patch(
  '/:id',
  validateRequest(AcademicDepartmentValidation.update),
  AcademicDepartmentController.updateOneInDB
);

export const AcademicDepartmentRoutes = router;
