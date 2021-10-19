import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, PromiseProvider } from 'mongoose';

export type RepositoryDocument = Repository & Document;

@Schema()
export class Repository {
    
    @Prop()
    githubId: Number;
    
    @Prop()
    nome: String;
    
    @Prop()
    descricao: String;
    
    @Prop()
    repoUrl: String;

    @Prop()
    donoUser: String;

}

export const RepositorySchema = SchemaFactory.createForClass(Repository)