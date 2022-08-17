import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListRentalsByUserUserUseCase } from './ListRentalsByUserUserUseCase';

class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listRentalsByUserUseCase = container.resolve(
      ListRentalsByUserUserUseCase,
    );

    const rentals = await listRentalsByUserUseCase.execute(id);

    return response.status(200).json(rentals);
  }
}

export { ListRentalsByUserController };
