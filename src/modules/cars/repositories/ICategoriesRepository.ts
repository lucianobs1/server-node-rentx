import { Category } from '../infra/typeorm/entities/Category';

interface ICategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICategoryDTO };
