import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor() {}

    async create(user: CreateUserDto) {
        return null
    }
}
