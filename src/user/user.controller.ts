import { UserService } from './user.service'
import { Body, Controller, Post, Get } from '@nestjs/common'
import { CreateUserDTO } from './dtos/createUser.dto'
import { User } from './interfaces/user.interface'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDTO): Promise<User> {
    return this.userService.createUser(createUser)
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers()
  }
}
