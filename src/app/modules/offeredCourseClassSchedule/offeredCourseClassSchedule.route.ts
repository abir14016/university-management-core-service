import express from 'express';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';

const router = express.Router();

//route for creating OfferedCourseClassSchedule
router.post('/', OfferedCourseClassScheduleController.insertIntoDB);

//route for getting all offeredCourseClassSchedule with pagination, searching, filtering & sorting
router.get('/', OfferedCourseClassScheduleController.getAllFromDB);

export const OfferedCourseClassScheduleRoutes = router;
