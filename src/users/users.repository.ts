import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '../common/database/abstract.repository';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository extends AbstractRepository<User> {
    protected readonly logger = new Logger(UsersRepository.name);


    // Mongoose needs this class to be transformed into something it can work with,
    // which is a Mongoose schema.This transformation is handled by NestJS behind
    // the scenes when you use the @InjectModel(User.name) decorator.
    constructor(@InjectModel(User.name) userModel: Model<User>) {
        super(userModel);
    }
}
