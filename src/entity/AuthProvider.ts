import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class AuthProvider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  provider: string; // example: 'google', 'facebook'

  @Column()
  providerId: string; // ID from provider

  @ManyToOne(() => User, (user) => user.authProviders)
  user: User;
}
