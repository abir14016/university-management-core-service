import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validation';

const router = express.Router();
//route for inserting a student into DB
router.post(
  '/',
  validateRequest(StudentValidation.create),
  StudentController.insertIntoDB
);

// route for retriving all students with pagination, searching, filtering and sorting
router.get('/', StudentController.getAllFromDB);

export const StudentRoutes = router;
