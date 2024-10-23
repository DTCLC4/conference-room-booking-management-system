import { DataSourceOptions } from 'typeorm'
import * as dotenv from 'dotenv'

// Load environment variables from a .env file into process.env
dotenv.config()

// Define the configuration for the TypeORM data source
const config: DataSourceOptions = {
  // Specify the database type (PostgreSQL in this case)
  type: 'postgres',

  // Host address of the database server
  host: process.env.DB_HOST,

  // Port number on which the database server is listening
  port: parseInt(process.env.DB_PORT || '5432'),

  // Database user for authentication
  username: process.env.DB_USERNAME,

  // Password for the database user
  password: process.env.DB_PASSWORD,

  // Name of the database to connect to
  database: process.env.DB_DATABASE,

  // Synchronize the database schema with the entities on every application launch (set to false in production)
  synchronize: false,

  // Enable logging of all SQL queries executed
  logging: true,

  // Specify the location of entity files for TypeORM
  entities: ['src/entities/*.ts'],

  // Specify the location of migration files
  migrations: ['src/db/migrations/*.ts'],

  // Subscribers are event listeners for entities (not used here)
  subscribers: [],
}

// Export the configuration object for use in other parts of the application
export default config
