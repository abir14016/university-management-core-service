import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

//route for creating an academic semester
router.post('/', AcademicSemesterController.insertIntoDB);

export const AcademicSemesterRoutes = router;
