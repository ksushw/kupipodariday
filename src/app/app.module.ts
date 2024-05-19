import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { WishesModule } from '../wishes/wishes.module';
import { WishlistsModule } from '../wishlists/wishlists.module';
import { OffersModule } from '../offers/offers.module';
import {User} from '../users/user.entity';
import {Wishes} from '../wishes/wishes.entity';
import {Wishlists} from '../wishlists/wishlist.entity';
import {Offers} from '../offers/offers.entity';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'student',
      password: 'student',
      database: 'kupipodariday',
      entities: [User, Wishes, Wishlists, Offers],
      synchronize: true,
    }),
    UsersModule,
    WishesModule,
    WishlistsModule,
    OffersModule,
  ],
 
})
export class AppModule {}
