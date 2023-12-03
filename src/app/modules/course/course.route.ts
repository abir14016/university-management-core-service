import express from 'express';
import { CourseController } from './course.controller';

const router = express.Router();

// route for inserting a course into DB
router.post('/', CourseController.insertIntoDB);

export const CourseRoutes = router;
