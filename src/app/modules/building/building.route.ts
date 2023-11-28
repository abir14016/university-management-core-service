import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingController } from './building.controller';
import { BuildingValidations } from './building.validation';

const router = express.Router();

//route for creating a building
router.post(
  '/',
  validateRequest(BuildingValidations.create),
  BuildingController.insertIntoDB
);

//route for getting all buildings with pagination, searching, filtering and sorting
router.get('/', BuildingController.getAllFromDB);

//route for getting single building by id
router.get('/:id', BuildingController.getByIdFromDB);

export const BuildingRoutes = router;
