import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validation';

const router = express.Router();
//route for inserting a student into DB
router.post(
  '/',
  validateRequest(StudentValidation.create),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentController.insertIntoDB
);

// route for retriving all students with pagination, searching, filtering and sorting
router.get('/', StudentController.getAllFromDB);

// route for retriving single student from DB
router.get('/:id', StudentController.getByIdFromDB);

//route for updating student
router.patch(
  '/:id',
  validateRequest(StudentValidation.update),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentController.updateOneInDB
);

// route for deleting a student from DB
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentController.deleteByIdFromDB
);

export const StudentRoutes = router;
