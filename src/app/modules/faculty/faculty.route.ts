import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();
// route for inserting a faculty into DB
router.post(
  '/',
  validateRequest(FacultyValidation.create),
  FacultyController.insertIntoDB
);

// route for getting all faculties with pagination, searching, filtering and sorting
router.get('/', FacultyController.getAllFromDB);

export const facultyRoutes = router;
