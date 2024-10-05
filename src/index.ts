import express, { Request, Response } from 'express';
import cors from 'cors';  // Add CORS to allow requests from the frontend


const app = express();

const port = 3000;

app.use(cors());

// Middleware
app.use(cors()); // Allows React app to call your API

// Define a route
app.get('/api/data', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express API!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
