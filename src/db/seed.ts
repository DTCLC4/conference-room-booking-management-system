import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { faker } from '@faker-js/faker'
import { AppDataSource } from '../data-source'

const seedDatabase = async () => {
  // Initializing the data source, establishing a connection to the database
  await AppDataSource.initialize()
}

seedDatabase()
  // On successful seeding, log the success message
  .then(() => console.log('Seeding completed'))
  // Log any errors that occur during seeding
  .catch(error => console.log('Error during seeding: ', error))
  // Ensure the database connection is closed regardless of success or failure
  .finally(() => AppDataSource.destroy())
