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

// route for retriving single student from DB
router.get('/:id', StudentController.getByIdFromDB);

//route for updating student
router.patch(
  '/:id',
  validateRequest(StudentValidation.update),
  StudentController.updateIntoDB
);

export const StudentRoutes = router;
