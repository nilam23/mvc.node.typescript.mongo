import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UserSignUpDto {
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public password: string;
}
