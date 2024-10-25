import jwt from 'jsonwebtoken'
import { User } from '../entities/User'
import dotenv from 'dotenv'

// Load environment variables from a .env file into process.env
dotenv.config()

export const generateToken = (user: User) => {
  const payload = {
    id: user.id,
    username: user.username,
  }

  return jwt.sign(payload, process.env.JWT_SECRET || '', {
    expiresIn: '1h',  // Token expiration
  })
}
