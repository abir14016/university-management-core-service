import express from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

//route for creating semester registration
router.post('/', SemesterRegistrationController.insertIntoDB);

//route for retriving all semester registration with pagination, searching, filtering & sorting
router.get('/', SemesterRegistrationController.getAllFromDB);

//route for getting single semester registration by ID
router.get('/:id', SemesterRegistrationController.getByIdFromDB);

//route for deleting a semester registration
router.delete('/:id', SemesterRegistrationController.deleteByIdFromDB);

export const SemesterRegistrationRoutes = router;
