import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { Repository, RepositoryDocument } from './entities/repository.entity';

@Injectable()
export class RepositoriesService {
  constructor(@InjectModel(Repository.name) private repositoryModel: Model<RepositoryDocument>) {}

  create(createRepositoryDto: CreateRepositoryDto) {
    const repository = new this.repositoryModel(createRepositoryDto);
    return repository.save();
  }

  findAll() {
    return this.repositoryModel.find();
  }

  findById(id: string) {
    return this.repositoryModel.findById(id);
  }

  update(id: string, updateRepositoryDto: CreateRepositoryDto) {
    return this.repositoryModel.findByIdAndUpdate({
      _id: id
    }, {
      $set: updateRepositoryDto
    },
    {
      new: true
    });
  }

  remove(id: string) {
    return this.repositoryModel.deleteOne({
      _id: id
    }).exec();
  }
}
