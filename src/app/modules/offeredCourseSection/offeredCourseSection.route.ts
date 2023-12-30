import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';
import { OfferedCourseSectionValidation } from './offeredCourseSection.validation';

const router = express.Router();

//route for creating offeredCourseSection
router.post(
  '/',
  validateRequest(OfferedCourseSectionValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseSectionController.insertIntoDB
);

//route for getting all offeredCourseSection with pagination, searching, filtering & sorting
router.get('/', OfferedCourseSectionController.getAllFromDB);

//route for retriving single offeredCourseSection
router.get('/:id', OfferedCourseSectionController.getByIdFromDB);

//route for updating offeredCourseSection
router.patch(
  '/:id',
  validateRequest(OfferedCourseSectionValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseSectionController.updateOneInDB
);

export const OfferedCourseSectionRoutes = router;
