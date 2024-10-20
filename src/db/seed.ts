import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { faker } from '@faker-js/faker'
import { AppDataSource } from '../data-source'


const seedDatabase = async () => {
  await AppDataSource.initialize()
}

seedDatabase()
  .then(() => console.log('Seeding completed'))
  .catch(error => console.log('Error during seeding: ', error))
  .finally(() => AppDataSource.destroy())
