import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Role } from './Role';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  permission: string; // example: 'read', 'write', 'delete'

  @ManyToOne(() => Role, (role) => role.permissions)
  role: Role;
}
