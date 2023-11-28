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

// route for getting single faculty by id
router.get('/:id', FacultyController.getByIdFromDB);

//route for updating a faculty
router.patch(
  '/:id',
  validateRequest(FacultyValidation.update),
  FacultyController.updateIntoDB
);

//route for deleting a faculty
router.delete('/:id', FacultyController.deleteFromDB);

export const facultyRoutes = router;
