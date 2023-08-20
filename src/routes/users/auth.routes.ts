import { Router } from 'express';
import { IRoute } from '../../interfaces/helpers/route.interface';
import { AuthController } from '../../controllers/users/auth.controller';

export class AuthRoutes implements IRoute {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}signup`, this.authController.signup);
  }
}
