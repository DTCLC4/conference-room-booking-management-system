import 'reflect-metadata'
import { DataSource } from 'typeorm'
import config from './config/ormconfig'

// Create a new DataSource instance using the imported configuration
// This instance will be used to connect to the database and manage entities
export const AppDataSource = new DataSource(config)

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!')
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error)
    })
