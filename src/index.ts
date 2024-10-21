import express, { Request, Response } from 'express'
import cors from 'cors'
import passport from './utils/passport'
import userRoutes from './routes/userRoutes'

const app = express()

const port = 3000

// Middleware to enable Cross-Origin Resource Sharing (CORS)
// This allows the server to handle requests from different origins
app.use(cors())
// Initialize Passport middleware
app.use(passport.initialize())
app.use(express.json())

// Routes
app.use('/api/auth', userRoutes)

// Start the server and listen on the specified port
// The server will log a message when it's running
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
