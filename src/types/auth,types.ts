import { UserType } from './user.types';

export interface ISubmitSignUpResponse {
  status: string;
  user: UserType;
  access_token: string;
  type: string;
}
//
