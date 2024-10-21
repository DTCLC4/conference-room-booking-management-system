import { AppDataSource } from './../data-source'
import bcrypt from 'bcrypt'
import { User } from '../entities/User'
import crypto from 'crypto';
import { userRepository } from '../repositories/userRepository';
import { roleRepository } from '../repositories/roleRepository';

export class AuthService {

  // Check if email exists
  async emailExists(email: string): Promise<boolean> {
    const existingUser = await userRepository.findByEmail(email)
    return !!existingUser // Returns true if the user exists
  }

  // Method to get the Gravatar URL
  getGravatarImage(email: string, size: number = 200, defaultImage: string = 'mp'): string {
    const hashedEmail = crypto.createHash('md5').update(email.trim().toLowerCase()).digest('hex');
    return `https://www.gravatar.com/avatar/${hashedEmail}?s=${size}&d=${defaultImage}`
  }

  // Register a new user
  async registerUser({ username, email, password }: { username: string, email: string, password: string }) {
    // 1. Check if the email already exists
    const emailExists = await this.emailExists(email)
    if (emailExists) {
      throw new Error('Email already exists')
    }

    // 2. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // 3. Create a new user instance
    const newUser = new User()
    newUser.username = username
    newUser.email = email
    newUser.password = hashedPassword
    // Set default image URL
    // newUser.profileImage = this.getGravatarImage(email)

    const userRole = await roleRepository.findOneBy({ name: 'user' })
    if (!userRole) {
      throw new Error('Default "user" role not found')
    }

    newUser.roles = [userRole]

    // 4. Save the new user to the database
    const saveUser = await userRepository.save(newUser)

    // Optionally return the created user
    return saveUser
  }
}

export const authService = new AuthService()