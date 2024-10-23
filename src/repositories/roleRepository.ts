import { AppDataSource } from "../data-source";
import { Role } from "../entities/Role";

export const roleRepository = AppDataSource.getRepository(Role)