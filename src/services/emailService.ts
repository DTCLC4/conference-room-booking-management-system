import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

// Load environment variables from a .env file into process.env
dotenv.config()

export class EmailService {
  private transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 2525,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
  })

  async sendVerificationEmail(to: string, token: string) {
    const verificationUrl = `http://localhost:3000/verify-email?token=${token}`

    await this.transporter.sendMail({
      from: `"BookingApp" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'Verify Your Email',
      html: `
        <h3>Email Verification</h3>
        <p>Please click the link below to verify your email address:</p>
        <a href="${verificationUrl}">Verify Email</a>
      `
    })
  }
}

export const emailService = new EmailService()
