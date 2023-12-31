import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { RoomController } from './room.controller';
import { RoomValidation } from './room.validation';

const router = express.Router();

// route for creating a room
router.post(
  '/',
  validateRequest(RoomValidation.create),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  RoomController.insertIntoDB
);

//route for getting all rooms with pagination, searching, filtering and sorting
router.get('/', RoomController.getAllFromDB);

//route for getting single room by id
router.get('/:id', RoomController.getByIdFromDB);

//route for updating single room
router.patch(
  '/:id',
  validateRequest(RoomValidation.update),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  RoomController.updateOneInDB
);

//route for deleting a room
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  RoomController.deleteByIdFromDB
);

export const RoomRoutes = router;
