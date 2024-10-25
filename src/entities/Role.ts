import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Permission } from './Permission'
import { User } from './User'

// Marks this class as a TypeORM entity, which maps to the "role" table in the database
@Entity()
export class Role {

  // Automatically generates a UUID as the primary key for each role record
  @PrimaryGeneratedColumn('uuid')
  id: string

  // Creates a unique column to store the role name (e.g., "ADMIN", "USER")
  @Column({ unique: true })
  // The name of the role, which must be unique in the system
  name: string

  // Defines a Many-to-Many relationship with the User entity
  @ManyToMany(() => User, (user) => user.roles)
  // A role can be assigned to multiple users, and a user can have multiple roles
  users: User[]

  // Defines a Many-to-Many relationship with the Permission entity
  @ManyToMany(() => Permission, (permission) => permission.roles)
  // Indicates that this is the owning side of the relationship, creating a join table to link roles and permissions
  @JoinTable()
  // A role can have many permissions, and a permission can be associated with many roles
  permissions: Permission[]

  // Automatically stores the timestamp when a role is created
  @CreateDateColumn()
  createdAt: Date

  // Automatically updates the timestamp when a role record is modified
  @UpdateDateColumn()
  updatedAt: Date
}
