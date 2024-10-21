import { body } from 'express-validator'

export const registerValidationRules = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address.')
    .normalizeEmail(),

  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long.')
    .custom((value, { req }) => {
      // Only check the regex if the length requirement is met
      if (value.length >= 8) {
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)) {
          throw new Error('Password must contain at least one uppercase letter, one lowercase letter, and one numeric digit.')
        }
      }
      return true // Indicates success
    }),

  body('username')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long.')
    .custom((value, { req }) => {
      // Only check the regex if the length requirement is met
      if (value.length >= 3) {
        if (!/([a-zA-Z0-9_\s]+)/.test(value)) {
          throw new Error('Username can only contain letters.')
        }
      }
      return true // Indicates success
    }),
]
