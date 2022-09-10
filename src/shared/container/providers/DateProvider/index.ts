import { container } from 'tsyringe';

import { IDateProvider } from './IDateProvider';
import { DaysJsDateProvider } from './implementations/DaysJsDateProvider';

container.registerSingleton<IDateProvider>(
  'DayjsDateProvider',
  DaysJsDateProvider,
);
