import { APIRequestContext } from '@playwright/test';

class GarageController {
  async getAllBrands(request: APIRequestContext) {
    return await request.get('/api/cars/brands');
  }

  async getAllModels(request: APIRequestContext) {
    return await request.get('/api/cars/models');
  }

  async getUserCars(request: APIRequestContext, sid: string) {
    return await request.get('/api/cars', {
      headers: {
        Cookie: `sid=${sid}`,
      },
    });
  }

  async createCar(
    request: APIRequestContext,
    sid: string,
    carBrandId: number,
    carModelId: number,
    mileage: number,
  ) {
    return await request.post('/api/cars', {
      headers: {
        Cookie: `sid=${sid}`,
      },
      data: {
        carBrandId,
        carModelId,
        mileage,
      },
    });
  }

  async deleteCar(request: APIRequestContext, sid: string, carId: number) {
    return await request.delete(`/api/cars/${carId}`, {
      headers: {
        Cookie: `sid=${sid}`,
      },
    });
  }
}

export const garageController = new GarageController();
