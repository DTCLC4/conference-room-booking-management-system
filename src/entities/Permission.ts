import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Role } from './Role'

// Marks this class as a TypeORM entity, mapping it to the "permission" table in the database
@Entity()
export class Permission {

  // Automatically generates a UUID as the primary key for each record
  @PrimaryGeneratedColumn('uuid')
  id: string

  // Creates a unique column to store permission actions (e.g., "READ_USER", "CREATE_POST")
  @Column({ unique: true })
  // A string representing a specific permission action
  action: string

  // Establishes a Many-to-Many relationship with the Role entity
  @ManyToMany(() => Role, (role) => role.permissions)
  // A permission can be associated with multiple roles, and a role can have multiple permissions
  roles: Role[]

  // Automatically sets the timestamp when a permission is created
  @CreateDateColumn()
  createdAt: Date

  // Automatically updates the timestamp when the permission record is modified
  @UpdateDateColumn()
  updatedAt: Date
}
