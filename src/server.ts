import { App } from './app';
import { AuthRoutes } from './routes/users/auth.routes';

const app = new App([new AuthRoutes()]);

app.listen();
