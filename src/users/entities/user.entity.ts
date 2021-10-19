import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Endereco from 'src/users/entities/endereco.entity';
import { Github } from './github.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
  
  @Prop()
  nome: string;

  @Prop()
  idade: number;

  @Prop()
  endereco: Endereco;

  @Prop()
  githubInfo: Github;
}

export const UserSchema = SchemaFactory.createForClass(User);