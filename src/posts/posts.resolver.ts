import {
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Post } from './post.entity';
import { PostsService } from './posts.service';
import { User } from '../users/user.entity';
import PostsLoaders from './posts.loader';

@Resolver(Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private postsLoaders: PostsLoaders,
  ) {}

  @Query(() => [Post], { name: 'posts' })
  getPosts() {
    return this.postsService.getPosts();
  }
  @ResolveField('createdBy', () => User)
  getCreatedBy(@Parent() post: Post) {
    const { userId } = post;
    return this.postsLoaders.batchUsers.load(userId);
  }
}
