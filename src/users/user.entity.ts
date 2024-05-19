import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Wishes } from '../wishes/wishes.entity';
import { Offers } from '../offers/offers.entity';
import { Wishlists } from '../wishlists/wishlist.entity';

import { Contains, Length, IsEmail } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @CreateDateColumn()
  createAt: string;

  @Column()
  @UpdateDateColumn()
  updateAt: string;

  @Column()
  @Length(1, 64)
  username: string;

  @Column()
  @Length(1, 200)
  about: string;

  @Column()
  @Contains(
    '/^((ftp|http|https)://)?(www.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*.?)*.{1}[A-Za-zА-Яа-я0-9-]{2,8}(/([w#!:.?+=&%@!-/])*)?/',
  )
  avatar: string;

  @Column()
  @IsEmail()
  email: string;

  @OneToMany(() => Wishes, (wish) => wish.owner)
  wishes: Wishes[];

  @OneToMany(() => Offers, (offer) => offer.user)
  offers: Offers[];

  @OneToMany(() => Wishlists, (wishlist) => wishlist)
  wishlists: Wishlists[];
}
