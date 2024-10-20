import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToOne } from 'typeorm'
import { User } from './User'

// This decorator marks the class as a database entity in TypeORM
@Entity()
export class AuthProvider {

  // Automatically generates a UUID for each new record as the primary key
  @PrimaryGeneratedColumn('uuid')
  id: string

  // Simple column to store the name of the authentication provider (e.g., "google", "facebook")
  @Column()
  // Example: "google", "facebook"
  provider: string

  // Unique constraint ensures that no two records can have the same external provider ID
  @Column({ unique: true })
  // The external provider's user ID, unique per user per provider
  providerId: string

  // Defines a Many-to-One relationship: Many AuthProvider records can belong to one User
  @ManyToOne(() => User, (user) => user.authProviders)
  // The User to which this authentication provider is linked
  user: User

  // Automatically stores the date and time when this record was created
  @CreateDateColumn()
  createdAt: Date

  // Automatically stores the date and time when this record was last updated
  @UpdateDateColumn()
  updatedAt: Date
}
