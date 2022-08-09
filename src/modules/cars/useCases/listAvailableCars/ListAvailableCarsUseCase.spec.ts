import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listCarUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Car description 1',
      daily_rate: 110,
      license_plate: 'HHH-111',
      fine_amount: 40,
      brand: 'Car_brand_1',
      category_id: 'category test',
    });

    const cars = await listCarUseCase.execute({});

    expect(cars).toEqual([car]);
    expect(cars.length).not.toBe(0);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Car description 1',
      daily_rate: 110,
      license_plate: 'HHH-111',
      fine_amount: 40,
      brand: 'Brand1',
      category_id: 'category1',
    });

    const cars = await listCarUseCase.execute({
      name: 'Car1',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Car description 1',
      daily_rate: 110,
      license_plate: 'HHH-111',
      fine_amount: 40,
      brand: 'Brand2',
      category_id: 'category 2',
    });

    const cars = await listCarUseCase.execute({
      brand: 'Brand2',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Car description 1',
      daily_rate: 110,
      license_plate: 'HHH-111',
      fine_amount: 40,
      brand: 'Brand3',
      category_id: '12345',
    });

    const cars = await listCarUseCase.execute({
      category_id: '12345',
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
