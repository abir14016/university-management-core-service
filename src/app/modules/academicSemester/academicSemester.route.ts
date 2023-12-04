import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

//route for creating an academic semester
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicSemesterController.insertIntoDB
);

//route for getting all academic semesters with pagination, searching, filtering and sorting
router.get('/', AcademicSemesterController.getAllFromDB);

//route for getting single academic semester by id
router.get('/:id', AcademicSemesterController.getByIdFromDB);

//route for updating an academic semester by id
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.update),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicSemesterController.updateOneInDB
);

//route for deleting an academic semester by id
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicSemesterController.deleteByIdFromDB
);

export const AcademicSemesterRoutes = router;
