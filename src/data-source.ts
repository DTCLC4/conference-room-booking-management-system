import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "./config/ormconfig";

// Create a new DataSource instance using the imported configuration
// This instance will be used to connect to the database and manage entities
export const AppDataSource = new DataSource(config);
