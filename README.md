# shoodies

Application to help shodoers to choose their goodies

## Getting Started

### Prerequisites

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

If you need to install node and npm, you can use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

-   Node.js >= 18.14
-   Npm >= 9.5
-   Docker

## Installation

Run the following command directly from root folder to install dependencies:

```bash
npm ci
```

_Note: you don't have to install dependencies for each package, the root package.json will install all dependencies for you_

## Usage

### Development

**Frontend:**

To start the frontend in development mode, run the following command:

```bash
npm run dev -w frontend
```

**Backend:**
To start the backend in development mode, run the following command:

```bash
npm run dev -w backend
```

You have to run this script to update Docker:

```bash
npm run docker:update -w backend
```

To acces to the database's data you have to install Prisma. Follow the steps in the prisma's [website](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql). Then install the prisma client, run the following command:

```bash
npm install @prisma/client
```

Finally run the following script :

```bash
npm run db:generate -w backend
```

_Note:Be careful, Docker must be running if you want to acces to your database._

## Tools

### Linting

Eslint is used to lint the code. To run the linter, run the following command:

```bash
npm run lint
```

You can install the eslint extension for your IDE to see linting errors in your code.

_Note: Eslint will help you sort your imports automatically. It has been configured only for vscode. If you use another IDE, you will have to configure it yourself._

### Formatting

Prettier is used to format the code. You can install the prettier extension for your IDE to format the code on save.

### Testing

Jest is used to test the code.To install Jest, run the following command:

```bash
npm install --save-dev jest
```

Supertest is a Jest library to test api's https requests.To install Supertest, run the following command:

```bash
npm install supertest --save-dev
```
