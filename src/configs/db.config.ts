import { DB_HOST } from './env.config';

export const dbConfigs = {
  url: DB_HOST,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
