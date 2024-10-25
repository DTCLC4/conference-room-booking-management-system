import { AppDataSource } from '../data-source'
import { User } from '../entities/User'

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

  // Find user by verification token
  async findByToken(token: string): Promise<User | null> {
    // Finds a user entity by verification token
    return await this.userRepository.findOne({ where: { verificationToken: token } })
  }
}

export const userRepository = new UserRepository()
