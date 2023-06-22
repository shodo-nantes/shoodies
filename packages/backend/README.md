# ![image](/packages/frontend/public/favicon.png) Shoodies  BACKEND

Backend for Shoodies app

## Installation

See root [README](../../README.md#installation) for installation instructions

## Usage

### Development

See root [README](../../README.md#usage) for usage instructions

or

Run the following command:

```bash
npm run dev
```

You have to run this script to update [Docker](https://docs.docker.com/):

```bash
npm run docker:update -w backend
```
We use [Prisma](https://www.prisma.io/docs) as an ORM, to generate the database run the following command :

```bash
npm run db:generate -w backend
```

_Note : Be careful, Docker must be running if you want to acces your database._


## Testing

To test the code we use [Jest](https://jestjs.io/docs/getting-started) and its library [Supertest](https://github.com/ladjs/supertest#readme) to test api's https requests.

To run the tests, use the following command:

```bash
npm run test
```

## Configuration

You can configure the backend by creating a `.env` file in the root of the backend package.


### Environment variables

You have to define the following environment variables in the `.env` file:

| Name         | Description                                                              | Default value |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| PORT         | Port to run the server on (optional)                                                                                                   | 3000          |
| DB_HOST      | Host of the database (used by docker-compose.yml)                                                                                      |               |
| DB_PORT      | Port of the database (used by docker-compose.yml)                                                                                      |               |
| DB_NAME      | Name of the database (used by docker-compose.yml)                                                                                      |               |
| DB_USER      | User of the database (used by docker-compose.yml)                                                                                      |               |
| DB_PASSWORD  | Password of the database (used by docker-compose.yml)                                                                                  |               |
| DATABASE_URL | URL of the database (used by prisma, [see documentation](https://www.prisma.io/docs/reference/database-reference/connection-urls#env)) |               |
