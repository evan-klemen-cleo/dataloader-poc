import {
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Post } from './post.entity';
import { PostsService } from './posts.service';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Resolver(Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
  ) {}

  @Query(() => [Post], { name: 'posts' })
  getPosts() {
    return this.postsService.getPosts();
  }
  @ResolveField('createdBy', () => User)
  getCreatedBy(@Parent() post: Post, @Context('dl') dl: any) {
    console.log('context-------->', dl);
    const { userId } = post;
    return this.usersService.getUser(userId);
  }
}
