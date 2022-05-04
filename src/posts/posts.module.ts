import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { UsersModule } from '../users/users.module';
import { PostsResolver } from './posts.resolver';

@Module({
  imports: [UsersModule],
  providers: [PostsService, PostsResolver],
  exports: [PostsService],
})
export class PostsModule {}
