import express from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

//route for creating semester registration
router.post('/', SemesterRegistrationController.insertIntoDB);

//route for retriving all semester registration with pagination, searching, filtering & sorting
router.get('/', SemesterRegistrationController.getAllFromDB);

export const SemesterRegistrationRoutes = router;
