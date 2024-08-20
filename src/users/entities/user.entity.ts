import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractEntity } from '../../common/database/abstract.entity';
import { Field, ObjectType } from '@nestjs/graphql';

// The `entities` folder in a NestJS resource typically contains **entity classes** that represent the structure of 
// the data model for your application. These classes are usually mapped to database tables (in the case of relational databases)
// or collections (in the case of NoSQL databases).
@Schema({ versionKey: false })
@ObjectType()
export class User extends AbstractEntity {
  @Prop()
  @Field()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
