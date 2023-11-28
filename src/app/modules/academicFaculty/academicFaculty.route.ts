import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

//route for creating an academic faculty
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AcademicFacultyValidation.create),
  AcademicFacultyController.insertIntoDB
);

//route for getting all academic faculties
router.get('/', AcademicFacultyController.getAllFromDB);

//route for getting single academic faculty
router.get('/:id', AcademicFacultyController.getDataById);

//route for updating an academic faculty
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AcademicFacultyValidation.update),
  AcademicFacultyController.updateOneInDB
);

// route for deleting an academic faculty
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicFacultyController.deleteByIdFromDB
);

export const AcademicFacultyRoutes = router;
