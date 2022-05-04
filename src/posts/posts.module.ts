import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { UsersModule } from '../users/users.module';
import { PostsResolver } from './posts.resolver';
import PostsLoaders from './posts.loader';

@Module({
  imports: [UsersModule],
  providers: [PostsService, PostsResolver, PostsLoaders],
  exports: [PostsService],
})
export class PostsModule {}
