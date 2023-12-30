import express from 'express';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';

const router = express.Router();

//route for creating offeredCourseSection
router.post('/', OfferedCourseSectionController.insertIntoDB);

//route for getting all offeredCourseSection with pagination, searching, filtering & sorting
router.get('/', OfferedCourseSectionController.getAllFromDB);

export const OfferedCourseSectionRoutes = router;
