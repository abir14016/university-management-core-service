import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

//route for creating an academic faculty
router.post('/', AcademicFacultyController.insertIntoDB);
