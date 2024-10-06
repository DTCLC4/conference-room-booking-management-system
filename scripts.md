# TypeORM Migration Scripts

This document provides commands for generating and running TypeORM migrations using `ts-node` and the TypeORM CLI.

## 1. Generate a New Migration

To generate a new migration, use the following command:

```bash
npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate ./src/migrations/<name-migration> -d ./src/data-source.ts
```

## 2. Run Migration

To run a migration, use the following command:

```bash
npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d ./src/data-source.ts
```
