import { Building, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { buildingSearchableFields } from './building.constants';
import { IBuildingFilterRequest } from './building.interface';

//service for creating a building
const insertIntoDB = async (data: Building): Promise<Building> => {
  const result = await prisma.building.create({
    data,
  });
  return result;
};

//service for getting all buildings with pagination, searching, filtering and sorting
const getAllFromDB = async (
  filters: IBuildingFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Building[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm } = filters;

  const andConditons = [];

  if (searchTerm) {
    andConditons.push({
      OR: buildingSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  const whereConditons: Prisma.BuildingWhereInput =
    andConditons.length > 0 ? { AND: andConditons } : {};

  const result = await prisma.building.findMany({
    skip,
    take: limit,
    where: whereConditons,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.building.count({
    where: whereConditons,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

//service for getting single building by id
const getByIdFromDB = async (id: string): Promise<Building | null> => {
  const result = await prisma.building.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const BuildingService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
};