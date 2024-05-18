import { Controller, Get } from '@nestjs/common';

@Controller('wishes')
export class WishesController {
    @Get()
    getHello(): string {
        return 'wishes';
      }
}
