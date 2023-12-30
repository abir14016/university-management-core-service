import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseController } from './offeredCourse.controller';
import { OfferedCourseValidation } from './offeredCourse.validation';

const router = express.Router();

//route for creating an offered course
router.post(
  '/',
  validateRequest(OfferedCourseValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.insertIntoDB
);

// route for getting all offred course with pagination, searching, filtering & sorting
router.get('/', OfferedCourseController.getAllFromDB);

//route for getting single offeredCourse by id
router.get('/:id', OfferedCourseController.getByIdFromDB);

export const OfferedCourseRoutes = router;
