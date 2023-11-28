import express from 'express';
import { BuildingController } from './building.controller';

const router = express.Router();

//route for creating a building
router.post('/', BuildingController.insertIntoDB);

export const BuildingRoutes = router;
