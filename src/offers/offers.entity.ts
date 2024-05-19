import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Wishes } from '../wishes/wishes.entity';

@Entity()
export class Offers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @CreateDateColumn()
  createAt: string;

  @Column()
  @UpdateDateColumn()
  updateAt: string;

  @Column()
  amount: number;

  @Column()
  hidden: boolean;

  @OneToMany(() => Wishes, (wish) => wish.offers)
  item: Wishes;

  @ManyToOne(() => User, (user) => user.offers)
  user: User;
}
