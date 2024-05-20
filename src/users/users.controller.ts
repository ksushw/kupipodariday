import { Controller, Get, Patch, Param, Delete, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  create(): Promise<any> {
    return this.usersService.find({});
  }

  @Patch()
  updateOne(@Res() res: Response, @Param('id') id: string): Promise<any> {
    return this.usersService.updateOne({ id: id, ...res.body });
  }

  @Patch()
  find(@Res() res: Response, @Param('id') id: string): Promise<any> {
    return this.usersService.updateOne({ id: id, ...res.body });
  }

  @Delete(':id')
  removeOne(@Param('id') id: string): Promise<any> {
    return this.usersService.removeOne({ id: id });
  }
}
