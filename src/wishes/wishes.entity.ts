import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Offers } from '../offers/offers.entity';
import { Length, Min, IsInt, Contains } from 'class-validator';

@Entity()
export class Wishes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @CreateDateColumn()
  createAt: string;

  @Column()
  @UpdateDateColumn()
  updateAt: string;

  @Column()
  @Length(1, 250)
  name: string;

  @Column()
  @Contains(
    '/^((ftp|http|https)://)?(www.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*.?)*.{1}[A-Za-zА-Яа-я0-9-]{2,8}(/([w#!:.?+=&%@!-/])*)?/',
  )
  link: string;

  @Column()
  @Contains(
    '/^((ftp|http|https)://)?(www.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*.?)*.{1}[A-Za-zА-Яа-я0-9-]{2,8}(/([w#!:.?+=&%@!-/])*)?/',
  )
  image: string;

  @Column()
  @Min(1)
  price: string;

  @Column()
  @IsInt()
  @Min(1)
  raised: string;

  @Column()
  @Length(1, 1024)
  description: string;

  @Column()
  copied: number;

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @ManyToOne(() => Offers, (offer) => offer.user)
  offers: Offers[];
}
