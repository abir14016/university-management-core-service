import express from 'express';
import { CourseController } from './course.controller';

const router = express.Router();

// route for inserting a course into DB
router.post('/', CourseController.insertIntoDB);

// route for retriving all courses with pagination, searching, filtering and sorting
router.get('/', CourseController.getAllFromDB);

export const CourseRoutes = router;
