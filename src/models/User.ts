// src/model/User.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // This will create or map to the 'users' table
export class User {
  @PrimaryGeneratedColumn()
  id!: number; // Non-null assertion for TypeORM handling

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;
}
