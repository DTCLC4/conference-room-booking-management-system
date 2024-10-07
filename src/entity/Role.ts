import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { Permission } from './Permission';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string; // example: 'admin', 'user', 'moderator'

  @ManyToOne(() => User, (user) => user.roles)
  user: User;

  @OneToMany(() => Permission, (permission) => permission.role)
  permissions: Permission[];
}
