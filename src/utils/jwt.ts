import jwt from 'jsonwebtoken'
import { User } from '../entities/User'
import dotenv from 'dotenv'

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
