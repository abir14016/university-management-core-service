import express from 'express';
import { BuildingController } from './building.controller';

const router = express.Router();

//route for creating a building
router.post('/', BuildingController.insertIntoDB);

//route for getting all buildings with pagination, searching, filtering and sorting
router.get('/', BuildingController.getAllFromDB);

export const BuildingRoutes = router;
