import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingController } from './building.controller';
import { BuildingValidations } from './building.validation';

const router = express.Router();

//route for creating a building
router.post(
  '/',
  validateRequest(BuildingValidations.create),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BuildingController.insertIntoDB
);

//route for getting all buildings with pagination, searching, filtering and sorting
router.get('/', BuildingController.getAllFromDB);

//route for getting single building by id
router.get('/:id', BuildingController.getByIdFromDB);

//route for updating a building
router.patch(
  '/:id',
  validateRequest(BuildingValidations.update),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BuildingController.updateOneInDB
);

//route for deleting a building
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BuildingController.deleteByIdFromDB
);

export const BuildingRoutes = router;
