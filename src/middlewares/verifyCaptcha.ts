import { Request, Response, NextFunction } from 'express'
import axios from 'axios'
import * as dotenv from 'dotenv'

// Load environment variables from a .env file into process.env
dotenv.config()

export const verifyCaptcha = async (req: Request, res: Response, next: NextFunction) => {
  const recaptchaToken = req.body['g-recaptcha-response']

  if (!recaptchaToken) {
    res.status(400).json({ message: 'CAPTCHA token is missing' })
  }

  // Google reCAPTCHA secret key
  const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || ''
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`


  try {
    // Verify reCAPTCHA token by making a request to Google's API
    const response = await axios.post(verifyUrl)
    const data = response.data

    // For reCAPTCHA v2, 'success' indicates validation status
    // For reCAPTCHA v3, you might check 'score' (a score of 0.5 or higher is usually considered a success)
    if (!data.success) {
      res.status(400).json({ error: 'CAPTCHA validation failed', details: data['error-codes'] })
    }

    // If validation is successful, move to the next middleware/controller
    next()
  } catch (error) {
    console.error('Error during CAPTCHA verification', error)
    res.status(500).json({ message: 'Internal server error during CAPTCHA validation' })
  }
}
