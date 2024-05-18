import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getHello(): string {
        return 'В этом задании нет фронтенда. Зато в нем есть транзакции (точнее вам предстоит их задействовать).';
      }
}
