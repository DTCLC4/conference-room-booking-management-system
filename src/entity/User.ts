import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, CreateDateColumn, UpdateDateColumn, JoinTable } from 'typeorm'
import { AuthProvider } from './AuthProvider'
import { Role } from './Role'

// Marks this class as a TypeORM entity, mapping it to the "user" table in the database
@Entity()
export class User {

  // Automatically generates a UUID as the primary key for each user record
  @PrimaryGeneratedColumn('uuid')
  id: string

  // Unique constraint ensures that each username is distinct in the system
  @Column({ unique: true })
  // The user's chosen username
  username: string

   // Column to store the user's password. It should be hashed before storing.
  @Column()
  // Store hashed password.
  password: string

  // Unique constraint ensures that each email is distinct in the system
  @Column({ unique: true })
  // The user's email address
  email: string

  // Default value is true indicates whether the user account is active
  @Column({ default: true })
   // If the user account is active.
  isActive: boolean

  // Nullable field for tracking the last login timestamp
  @Column({ nullable: true })
   // Last login timestamp.
  lastLogin: Date

  // Defines a Many-to-Many relationship with the Role entity
  @ManyToMany(() => Role, (role) => role.users)
  // Indicates that this is the owning side of the relationship, creating a join table to link users and roles
  @JoinTable()
  // A user can have multiple roles
  roles: Role[]

  // Defines a One-to-Many relationship with the AuthProvider entity
  @OneToMany(() => AuthProvider, (authProvider) => authProvider.user)
  // A user can have multiple authentication providers linked to their account
  authProviders: AuthProvider[]

   // Automatically stores the timestamp when a user record is created
  @CreateDateColumn()
  createdAt: Date

  // Automatically updates the timestamp when the user record is modified
  @UpdateDateColumn()
  updatedAt: Date
}
