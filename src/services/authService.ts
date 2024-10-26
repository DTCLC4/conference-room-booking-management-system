import bcrypt from 'bcrypt'
import { User } from '../entities/User'
import { userRepository } from '../repositories/userRepository'
import { roleRepository } from '../repositories/roleRepository'
import { emailService } from './emailService'
import { generateVerificationToken } from '../utils/crypto'
import { getGravatarImage } from '../utils/gravatar'

export class AuthService {

  // Check if email exists
  async emailExists(email: string): Promise<boolean> {
    const existingUser = await userRepository.findByEmail(email)
    return !!existingUser // Returns true if the user exists
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
    const verificationToken = generateVerificationToken()

    // 3. Create a new user instance
    const newUser = new User()
    newUser.username = username
    newUser.email = email
    newUser.password = hashedPassword
    // Set default image URL
    newUser.profileImage = getGravatarImage(email)
    newUser.verificationToken = verificationToken

    // Find the role with the name 'user' using the findByName method
    const userRole = await roleRepository.findByName('user')

    // If the 'user' role is not found, throw an error
    if (!userRole) {
      throw new Error('Default "user" role not found')
    }

    // Assign the 'user' role to the new user's roles array
    // A user can have multiple roles, so assign 'userRole' in an array
    newUser.roles = [userRole]

    // 4. Save the new user to the database
    const saveUser = await userRepository.save(newUser)

    await emailService.sendVerificationEmail(email, verificationToken)

    // Optionally return the created user
    return saveUser
  }

  async verifyEmail(token: string): Promise<boolean> {
    // Find the user in the database using the verification token
    const user = await userRepository.findByToken(token)

    // If no user is found, throw an error indicating the token is invalid or expired
    if (!user) {
      throw new Error('Invalid or expired token')
    }

    // Mark the user's email as verified by setting isVerified to true
    user.isVerified = true
    // Clear the verification token, as it is no longer needed
    user.verificationToken = null

    // Save the updated user record in the database
    await userRepository.save(user)

    // Return true to indicate successful email verification
    return true
  }

}

export const authService = new AuthService()
