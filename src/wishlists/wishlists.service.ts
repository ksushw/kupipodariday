import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Wishlists } from './wishlist.entity';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlists)
    private wishlistsRepository: Repository<Wishlists>,
  ) {}
  async create(wishlist: any): Promise<any> {
    return this.wishlistsRepository.insert(wishlist);
  }
  async find(query: any): Promise<any> {
    return this.wishlistsRepository.find({
      where: {
        ...query,
      },
    });
  }
  async updateOne(wishlist: any): Promise<any> {
    return this.wishlistsRepository.save(wishlist);
  }
  async removeOne(wishlist: any): Promise<any> {
    return this.wishlistsRepository.delete(wishlist);
  }
}
