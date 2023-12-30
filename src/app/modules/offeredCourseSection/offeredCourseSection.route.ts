import express from 'express';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';

const router = express.Router();

//route for creating offeredCourseSection
router.post('/', OfferedCourseSectionController.insertIntoDB);

//route for getting all offeredCourseSection with pagination, searching, filtering & sorting
router.get('/', OfferedCourseSectionController.getAllFromDB);

//route for retriving single offeredCourseSection
router.get('/:id', OfferedCourseSectionController.getByIdFromDB);

export const OfferedCourseSectionRoutes = router;
