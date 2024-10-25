import passport from 'passport'
import { Response, NextFunction, Request } from 'express'
import { User } from '../entities/User'

// Middleware to protect routes by authenticating the user's JWT token
export const auth = (req: Request, res: Response, next: NextFunction) => {
  // Use Passport to authenticate the request with the JWT strategy don't use sessions
  passport.authenticate('jwt', { session: false }, (err: any, user: User | false, info: any) => {
    // If there's an error during authentication, log it and send a 500 response
    if (err) {
      console.error('Authentication error:', err)
      return res.status(500).json({ message: 'Internal server error' })
    }

    // If no user is found (token is invalid or expired), send a 401 Unauthorized response
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    // Attach the authenticated user object to the request so it can be used in the next middleware or route
    req.user = user
    next() // Proceed to the next middleware or route handler
  })(req, res, next)
}
