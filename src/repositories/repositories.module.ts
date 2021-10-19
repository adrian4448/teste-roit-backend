import { Module } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';
import { RepositoriesController } from './repositories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Repository, RepositorySchema } from './entities/repository.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Repository.name, schema: RepositorySchema }])],
  controllers: [RepositoriesController],
  providers: [RepositoriesService]
})
export class RepositoriesModule {}
