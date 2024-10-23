import { AppDataSource } from '../data-source';
import { User } from '../entities/User';

export class UserRepository {
  private userRepository = AppDataSource.getRepository(User)

  // Find user by email
  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ email })
  }

  // Save user to database
  async save(user: User): Promise<User> {
    return await this.userRepository.save(user)
  }
}

export const userRepository = new UserRepository()
