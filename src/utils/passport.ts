import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import { User } from '../entities/User'
import { AppDataSource } from '../data-source'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

// Define JWT Strategy options
const opts: StrategyOptions = {
  // Extract token from Bearer authorization header
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  // Ensure secret is taken from env variables
  secretOrKey: process.env.JWT_SECRET || '',
}

interface JwtPayload {
  // Use string as User ID is a UUID
  id: string
}

// Configure Passport JWT Strategy
passport.use(
  new JwtStrategy(opts, async (jwtPayload: JwtPayload, done) => {
    try {
      const userRepository = AppDataSource.getRepository(User)

      // Fetch user by ID from JWT payload
      const user = await userRepository.findOne({ where: { id: jwtPayload.id } })

      if (user) {
        // Pass user to request if found
        return done(null, user)
      } else {
        // Pass false if no user is found (unauthorized)
        return done(null, false)
      }
    } catch (error) {
      // Log any error
      console.error('Error during JWT authentication:', error)
      // Pass error if any occurred during lookup
      return done(error, false)
    }
  })
)

export default passport
