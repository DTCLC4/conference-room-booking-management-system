import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

const port = 3000

// Middleware to enable Cross-Origin Resource Sharing (CORS)
// This allows the server to handle requests from different origins
app.use(cors())

// Start the server and listen on the specified port
// The server will log a message when it's running
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
