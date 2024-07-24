import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    list() {
        return 'all users'
    }

    @Post()
    create() {
        return 'create user'
    }

    @Put(':id')
    update() {
        return 'update user'
    } 

    @Delete(':id')
    delete() {
        return 'delete user'
    }
}
