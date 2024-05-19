import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Length } from 'class-validator';

@Entity()
export class Wishlists {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @CreateDateColumn()
  createAt: string;

  @Column()
  @UpdateDateColumn()
  updateAt: string;

  @Column()
  @Length(0, 250)
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @Column()
  items: string;
}
