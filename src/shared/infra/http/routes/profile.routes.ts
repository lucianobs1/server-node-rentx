import { ProfileUserController } from '@modules/cars/useCases/profileUseUseCase/ProfileUserController';
import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const profileRoutes = Router();

const profileController = new ProfileUserController();

profileRoutes.get('/', ensureAuthenticated, profileController.handle);

export { profileRoutes };
