import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Repository } from 'src/repositories/entities/repository.entity';

export type GithubDocument = Github & Document;

@Schema()
export class Github {
    
    @Prop()
    githubUser: String;
    
    @Prop()
    githubId: Number;
    
    @Prop()
    profileUrl: String;
    
    @Prop()
    avatarUrl: String;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Repository' }] })
    repositories: Repository;
}

export const GithubSchema = SchemaFactory.createForClass(Github)