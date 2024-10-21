import express, { Request, Response } from 'express'
import { registerValidationRules } from '../validators/userValidator'
import { authController } from '../controllers/authController'
import { verifyCaptcha } from '../middlewares/verifyCaptcha'

const router = express.Router()

// User registration route
router.post('/register', registerValidationRules, verifyCaptcha, (req: Request, res: Response) => {
  authController.registerUser(req, res)
})

router.get('/verify-email', authController.verifyEmail)


export default router
