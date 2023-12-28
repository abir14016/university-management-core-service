import express from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

//route for creating semester registration
router.post('/', SemesterRegistrationController.insertIntoDB);

export const SemesterRegistrationRoutes = router;
