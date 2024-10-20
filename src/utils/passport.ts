import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import { User } from '../entities/User'
import { AppDataSource } from '../data-source'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

// Define JWT Strategy options
const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token from Bearer authorization header
  secretOrKey: process.env.JWT_SECRET || '', // Ensure secret is taken from env variables
}

interface JwtPayload {
  id: string // Use string as User ID is a UUID
}

// Configure Passport JWT Strategy
passport.use(
  new JwtStrategy(opts, async (jwtPayload: JwtPayload, done) => {
    try {
      const userRepository = AppDataSource.getRepository(User)

      // Fetch user by ID from JWT payload
      const user = await userRepository.findOne({ where: { id: jwtPayload.id } })

      if (user) {
        return done(null, user) // Pass user to request if found
      } else {
        return done(null, false) // Pass false if no user is found (unauthorized)
      }
    } catch (error) {
      console.error('Error during JWT authentication:', error) // Log any error
      return done(error, false) // Pass error if any occurred during lookup
    }
  })
)

export default passport
