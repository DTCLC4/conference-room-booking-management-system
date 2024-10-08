import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AuthProvider } from './AuthProvider';
import { Role } from './Role';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ nullable: true })
  password: string;

  @OneToMany(() => AuthProvider, (authProvider) => authProvider.user)
  authProviders: AuthProvider[];

  @OneToMany(() => Role, (role) => role.user)
  roles: Role[];
}
