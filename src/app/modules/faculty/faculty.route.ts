import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();
// route for inserting a faculty into DB
router.post(
  '/',
  validateRequest(FacultyValidation.create),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FacultyController.insertIntoDB
);

// route for getting all faculties with pagination, searching, filtering and sorting
router.get('/', FacultyController.getAllFromDB);

//route for retriving course data for a faculty
router.get(
  '/my-courses',
  auth(ENUM_USER_ROLE.FACULTY),
  FacultyController.myCourses
);

//route for retrieve list of students enrolled in your course for a specific academic semester and course section [for faculty]
router.get(
  '/my-course-students',
  auth(ENUM_USER_ROLE.FACULTY),
  FacultyController.getMyCourseStudents
);

// route for getting single faculty by id
router.get('/:id', FacultyController.getByIdFromDB);

//route for updating a faculty
router.patch(
  '/:id',
  validateRequest(FacultyValidation.update),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FacultyController.updateOneInDB
);

//route for deleting a faculty
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FacultyController.deleteByIdFromDB
);

//route for assigning course/courses for a faculty
router.post(
  '/:id/assign-courses',
  validateRequest(FacultyValidation.assignOrRemoveCourses),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FacultyController.assignCourses
);

//route for removing course/courses for a faculty
router.delete(
  '/:id/remove-courses',
  validateRequest(FacultyValidation.assignOrRemoveCourses),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FacultyController.removeCourses
);

export const FacultyRoutes = router;
