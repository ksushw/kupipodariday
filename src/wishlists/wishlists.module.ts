import { Module } from '@nestjs/common';
import { WishlistsController } from './wishlists.controller';
import { WishlistsService } from './wishlists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishlists } from './wishlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wishlists])],
  controllers: [WishlistsController],
  providers: [WishlistsService],
})
export class WishlistsModule {}
