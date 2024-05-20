import { Module } from '@nestjs/common';
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offers } from './offers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Offers])],
  controllers: [OffersController],
  providers: [OffersService],
})
export class OffersModule {}
