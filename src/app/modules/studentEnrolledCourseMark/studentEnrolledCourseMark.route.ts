import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { StudentEnrolledCourseMarkConroller } from './studentEnrolledCourseMark.controller';

const router = express.Router();

//route for getting studentEnrolledCourseMarks
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkConroller.getAllFromDB
);

// route for retriving student's course marks for the specified academic semester and course
router.get(
  '/my-marks',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentEnrolledCourseMarkConroller.getMyCourseMarks
);

//route for updating student result
router.patch(
  '/update-marks',
  StudentEnrolledCourseMarkConroller.updateStudentMarks
);

//route for updating final result
router.patch(
  '/update-final-marks',
  StudentEnrolledCourseMarkConroller.updateFinalMarks
);

export const StudentEnrolledCourseMarkRoutes = router;
