import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

//route for creating an academic faculty
router.post(
  '/',
  validateRequest(AcademicFacultyValidation.create),
  AcademicFacultyController.insertIntoDB
);

//route for getting all academic faculties
router.get('/', AcademicFacultyController.getAllFromDB);

//route for getting single academic faculty
router.get('/:id', AcademicFacultyController.getDataById);

//route for updating an academic faculty
router.patch('/:id', AcademicFacultyController.updateOneInDB);

// route for deleting an academic faculty
router.delete('/:id', AcademicFacultyController.deleteByIdFromDB);

export const AcademicFacultyRoutes = router;
