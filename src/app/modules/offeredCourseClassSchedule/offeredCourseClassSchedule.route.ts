import express from 'express';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';

const router = express.Router();

//route for creating OfferedCourseClassSchedule
router.post('/', OfferedCourseClassScheduleController.insertIntoDB);

//route for getting all offeredCourseClassSchedule with pagination, searching, filtering & sorting
router.get('/', OfferedCourseClassScheduleController.getAllFromDB);

//route for getting single offeredCourseClassSchedule
router.get('/:id', OfferedCourseClassScheduleController.getByIdFromDB);

//route for updating offeredCourseClassSchedule
router.patch('/:id', OfferedCourseClassScheduleController.updateOneInDB);

//route for deleting offeredCourseClassSchedule
router.delete('/:id', OfferedCourseClassScheduleController.deleteByIdFromDB);

export const OfferedCourseClassScheduleRoutes = router;
