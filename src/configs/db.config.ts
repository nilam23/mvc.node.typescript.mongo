import { DB_HOST } from '@configs/env.config';

export const dbConfigs = {
  url: DB_HOST,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
