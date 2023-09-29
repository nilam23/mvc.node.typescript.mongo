import { UserModel } from '@models/users/user.model';
import { IUser } from '@interfaces/users/user.interface';
import { _isEmpty } from '@utils/helpers';
import { HttpException } from '@utils/httpException';

export class AuthService {
  public users = UserModel;

  public signUpUser = async (userData: IUser): Promise<IUser> => {
    if (_isEmpty(userData)) throw new HttpException(400, 'User data is missing');

    const newUser: IUser = await this.users.create(userData);

    return newUser;
  };
}
