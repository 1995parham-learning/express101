# Express 101

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
TARGET="Foo"
REPLACED="Bar"
```

Then build:

```bash
npm run build
```

And, run the code:

```bash
npm start
```

We are ready to test it:

```bash
curl 127.0.0.1:8080/api/replace -H 'Content-Type: application/json' -d '{ "Hello": "Foo", "Bye": { "Name": "Foo", "Who": 1 } }'
```

## Development

Running all above commands each time you change something takes time. So you can use the `dev` command
as follows:

```bash
npm run dev
```

## How it works?

We have an API named `replaced` that replaces a given string with another string in the request body.
Request body is JSON structured, and we convert it into dictionary, so we can do the replacing process
on values and don't change the keys.
