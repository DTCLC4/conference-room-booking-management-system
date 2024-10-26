import { AppDataSource } from '../data-source'
import { Role } from '../entities/Role'

export class RoleRepository {
  private roleRepository = AppDataSource.getRepository(Role)

  // Method to find a role by it's name
  async findByName(name: string): Promise<Role | null> {
    // Querying the Role entity by the name field
    return await this.roleRepository.findOneBy({ name })
  }
}

export const roleRepository = new RoleRepository()
