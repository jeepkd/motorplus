## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---
# Database Management
## Running database
1. Go to the root folder
1. Run docker
   ```
   docker-compose up -d
   ```
## Update seed database (with current data)
```zsh
npm run db:update_seed_db
```

## Reset the database with the saved seed
```zsh
npx prisma migrate reset
```
