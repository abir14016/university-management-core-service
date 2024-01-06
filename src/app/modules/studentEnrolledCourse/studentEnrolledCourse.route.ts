import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';
import { StudentEnrolledCourseValidation } from './studentEnrolledCourse.validation';

const router = express.Router();

//route for getting all studentEnrolledCourses with pagination, searching, filtering & sorting
router.get('/', StudentEnrolledCourseController.getAllFromDB);

//route for getting single studentEnrolledCourse
router.get('/:id', StudentEnrolledCourseController.getByIdFromDB);

//route for creating studentEnrolledCourse
router.post(
  '/',
  validateRequest(StudentEnrolledCourseValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.insertIntoDB
);

//route for updating studentEnrolledCourse
router.patch(
  '/:id',
  validateRequest(StudentEnrolledCourseValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.updateOneInDB
);

//route for deleting studentEnrolledCourse
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.deleteByIdFromDB
);

export const StudentEnrolledCourseRoutes = router;
