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

## Up and Running

First you need to create `.env` as follows:

```bash
PORT=8080
```

Then build:

```bash
npm run build
```
