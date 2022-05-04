import { Injectable } from '@nestjs/common';

// import { delay } from '../util';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Anna' },
  ];

  async getUsers(): Promise<User[]> {
    console.log('Getting users...');
    await setTimeout(() => {
      console.log('Done');
    }, 3000);
    return this.users;
  }

  async getUser(id: number): Promise<User> {
    console.log('Getting user...', id);
    await setTimeout(() => {
      console.log('Done');
    }, 1000);
    return this.users.find((user) => user.id === id);
  }
}
