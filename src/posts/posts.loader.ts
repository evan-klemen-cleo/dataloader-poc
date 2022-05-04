import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable({ scope: Scope.REQUEST })
export default class PostsLoaders {
  constructor(private usersService: UsersService) {}

  public readonly batchUsers = new DataLoader<number, User>(async (userIds) => {
    const users = await this.usersService.getUsersById(userIds);
    const usersMap = new Map(users.map((user) => [user.id, user]));
    return userIds.map((userId) => usersMap.get(userId));
  });
}
