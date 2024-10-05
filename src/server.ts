import 'reflect-metadata';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { User } from './models/User';
import knexConfig from '../knexfile';
import knex from 'knex';
const app = express();
const port = 3000;

const db = knex(knexConfig.development);

// Middleware
app.use(cors()); // Allows React app to call your API

// GET /api/v1/users using Knex
app.get('/api/v1/users', async (req: Request, res: Response) => {
  try {
    const users = await db('users').select('*');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users using Knex' });
  }
});

app.get('/api/data', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express API!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
