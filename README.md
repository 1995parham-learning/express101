# Express101

## Introduction

[Express](http://expressjs.com/) is HTTP framework for NodeJS and I think to practice using it by writing an application to find and replace a given string
by another string.
At the time of writing this sample, Express v5 is still under development, so we install it as follows:

```bash
npm install express@next
```

As always our project has configuration, so we need to have `dotenv`:

```bash
npm install dotenv
```

After that, we are going to have Typescript:

```bash
npm i -D typescript @types/express @types/node

npx tsc --init
```

For parsing request data based on content-type header we need the `body-parser` library:

```bash
npm install body-parser

npm i -D @types/body-parser
```

## Up and Running

First you need to create `.env` as follows:

```bash
PORT=8080
```

Then build:

```bash
npm run build
```

And, run the code:

```bash
npm start
```

## Development

Running all above commands each time you change something takes time. So you can use the `dev` command
as follows:

```bash
npm run dev
```
