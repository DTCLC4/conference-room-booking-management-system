import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

const port = 3000;

// Middleware
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
