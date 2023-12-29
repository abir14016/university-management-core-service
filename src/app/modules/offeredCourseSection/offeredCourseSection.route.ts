import express from 'express';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';

const router = express.Router();

//route for creating offeredCourseSection
router.post('/', OfferedCourseSectionController.insertIntoDB);

export const OfferedCourseSectionRoutes = router;
