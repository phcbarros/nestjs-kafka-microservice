import { Injectable } from '@nestjs/common';
import {GetUserRequest} from './get-user-request.dto';

export interface User {
  userId: string
  stripeUserId: string
}

@Injectable()
export class AppService {

  private readonly users: User[] = [
    {
      userId: '123',
      stripeUserId: '34566',
    },
    {
      userId: '456',
      stripeUserId: '56789',
    },
    {
      userId: '345',
      stripeUserId: '99999',
    },
  ]

  getUser(getUserRequest:GetUserRequest) {
    return this.users.find(user => user.userId === getUserRequest.userId)
  }
}
