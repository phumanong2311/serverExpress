import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  phoneNumber: number;

  age?: number;
}

export class UpdateUserDto {
  fullName?: string;
  email?: string;
  phoneNumber?: number;
  age?: number;
}
