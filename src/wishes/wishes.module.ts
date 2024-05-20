import { Module } from '@nestjs/common';
import { WishesController } from './wishes.controller';
import { WishesService } from './wishes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishes } from './wishes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wishes])],
  controllers: [WishesController],
  providers: [WishesService],
})
export class WishesModule {}
