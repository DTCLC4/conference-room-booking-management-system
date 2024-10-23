import passport from 'passport'
import { Response, NextFunction, Request } from 'express'
import { User } from '../entities/User'

// Middleware to protect routes
export const auth = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: any, user: User | false, info: any) => {
    if (err) {
      console.error('Authentication error:', err)
      return res.status(500).json({ message: 'Internal server error' })
    }

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    req.user = user // Attach user to the request object
    next()
  })(req, res, next)
}
