import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

//route for creating an academic semester
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.insertIntoDB
);

//route for getting all academic semesters with pagination, searching, filtering and sorting
router.get('/', AcademicSemesterController.getAllFromDB);

//route for getting single academic semester by id
router.get('/:id', AcademicSemesterController.getDataById);

//route for updating an academic semester by id
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.update),
  AcademicSemesterController.updateOneInDB
);

//route for deleting an academic semester by id
router.delete('/:id', AcademicSemesterController.deleteByIdFromDB);

export const AcademicSemesterRoutes = router;
