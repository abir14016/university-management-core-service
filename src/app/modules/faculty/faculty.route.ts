import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();
// route for inserting a faculty into DB
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
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
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(FacultyValidation.update),
  FacultyController.updateIntoDB
);

//route for deleting a faculty
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FacultyController.deleteFromDB
);

export const facultyRoutes = router;