import { Router } from 'express';
import { IRoute } from '@interfaces/helpers/route.interface';
import { AuthController } from '@controllers/users/auth.controller';
import { validationMiddleware } from '@middlewares/validation.middleware';
import { UserSignUpDto } from '@dtos/users/auth.dto';

export class AuthRoutes implements IRoute {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}signup`, validationMiddleware(UserSignUpDto), this.authController.signup);
  }
}
