import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Offers } from './offers.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offers)
    private offersRepository: Repository<Offers>,
  ) {}
  async create(offer: any): Promise<any> {
    return this.offersRepository.insert(offer);
  }
  async find(query: any): Promise<any> {
    return this.offersRepository.find({
      where: {
        ...query,
      },
    });
  }
  async updateOne(offer: any): Promise<any> {
    return this.offersRepository.save(offer);
  }
  async removeOne(offer: any): Promise<any> {
    return this.offersRepository.delete(offer);
  }
}
