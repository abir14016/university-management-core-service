import express from 'express';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';

const router = express.Router();

//route for creating OfferedCourseClassSchedule
router.post('/', OfferedCourseClassScheduleController.insertIntoDB);

export const OfferedCourseClassScheduleRoutes = router;
