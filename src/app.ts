import express from 'express';
import { ConnectOptions, set } from 'mongoose';
import { connect } from 'mongoose';
import { ErrorMiddleware } from '@middlewares/error.middleware';
import { NODE_ENV } from '@configs/env.config';
import { dbConfigs } from '@configs/db.config';
import { IRoute } from '@interfaces/helpers/route.interface';

export class App {
  public app: express.Application;
  public port: string | number;
  public env: string;

  constructor(routes: IRoute[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = NODE_ENV || 'development';

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private async connectToDatabase() {
    if (this.env === 'development') set('debug', true);

    await connect(dbConfigs.url as string, dbConfigs.options as ConnectOptions);
  }

  private initializeRoutes(routes: IRoute[]) {
    routes.forEach(route => this.app.use('/', route.router));
  }

  public initializeErrorHandling() {
    this.app.use(ErrorMiddleware);
  }
}
