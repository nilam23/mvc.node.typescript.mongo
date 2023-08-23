import { NextFunction, Request, Response } from 'express';
import { AuthService } from '@services/users/auth.service';
import { IUser } from '@interfaces/users/user.interface';
import { HttpStatusCodes } from '@utils/constants';

export class AuthController {
  public authService = new AuthService();

  public signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, username, password } = req.body;

      const newUserData: IUser = { email, username, password };

      const newUser: IUser = await this.authService.signUpUser(newUserData);

      return res.status(HttpStatusCodes.CREATED).json({ data: newUser, message: 'successful user sign up' });
    } catch (error) {
      next(error);
    }
  };
}
