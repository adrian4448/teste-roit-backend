import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [UsersModule, RepositoriesModule,
    MongooseModule.forRoot('mongodb://localhost/roit-desafio')
  ]
})
export class AppModule {}
