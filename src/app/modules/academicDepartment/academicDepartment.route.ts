import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();
//route for creating an academic department
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
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
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AcademicDepartmentValidation.update),
  AcademicDepartmentController.updateOneInDB
);

//route for deleting an academic department by id
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicDepartmentController.deleteByIdFromDB
);

export const AcademicDepartmentRoutes = router;
