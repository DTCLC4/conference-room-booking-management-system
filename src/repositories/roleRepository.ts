import { AppDataSource } from '../data-source'
import { Role } from '../entities/Role'

// Create a repository for the Role entity using the AppDataSource
export const roleRepository = AppDataSource.getRepository(Role)
