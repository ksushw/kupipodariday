import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: any): Promise<any> {
    return this.userRepository.insert(user);
  }

  async find(query: any): Promise<any> {
    return this.userRepository.find({
      where: {
        ...query,
      },
    });
  }

  async updateOne(user: any): Promise<any> {
    return this.userRepository.save(user);
  }

  async removeOne(user: any): Promise<any> {
    return this.userRepository.delete(user);
  }
}
