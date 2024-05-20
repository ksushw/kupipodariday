import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Wishes } from './wishes.entity';

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wishes)
    private wishesRepository: Repository<Wishes>,
  ) {}
  async create(wish: any): Promise<any> {
    return this.wishesRepository.insert(wish);
  }
  async find(query: any): Promise<any> {
    return this.wishesRepository.find({
      where: {
        ...query,
      },
    });
  }
  async updateOne(wish: any): Promise<any> {
    return this.wishesRepository.save(wish);
  }
  async removeOne(wish: any): Promise<any> {
    return this.wishesRepository.delete(wish);
  }
}
