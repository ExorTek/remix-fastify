# @exortek/remix-fastify

Fastify plugin for Remix.

### Compatibility

| Plugin version | Fastify version |
|----------------|:---------------:|
| `^1.x`         |     `^5.x`      |

## Installation

```bash
npm install @exortek/remix-fastify
```

OR

```bash
yarn add @exortek/remix-fastify
```

## Usage

CommonJS:

```javascript
const fastify = require('fastify');
const remixFastify = require("@exortek/remix-fastify");

const app = fastify();

app.register(remixFastify({
    buildDirectory: 'build', // default
    clientDirectory: 'client', // default
    serverDirectory: 'server', // default
    serverBuildFile: 'index.js', // default
    mode: process.env.NODE_ENV || 'development', // default
    fastifyStaticOptions: {}, // default
    viteOptions: {}, // default
}));

app.listen({port: 3000, host: 'localhost'}, (err, address) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server listening at ${address}`);
});
```

ESM:

```javascript
import fastify from 'fastify';
import remixFastify from "@exortek/remix-fastify";

const app = fastify();

app.register(remixFastify({
    buildDirectory: 'build', // default
    clientDirectory: 'client', // default
    serverDirectory: 'server', // default
    serverBuildFile: 'index.js', // default
    mode: process.env.NODE_ENV || 'development', // default
    fastifyStaticOptions: {}, // default
    viteOptions: {}, // default
}));

app.listen({port: 3000, host: 'localhost'}, (err, address) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server listening at ${address}`);
});
```
## How to use in Project

Set up your project as per the [Remix documentation](https://remix.run/docs/en/main/other-api/create-remix). Then,
follow the steps below:

1. Create a new file in the root of your project called `server.mjs`.
2. Add the following code to the file:

```javascript
import fastify from 'fastify';
import remixFastify from "@exortek/remix-fastify";

const app = fastify();

app.register(remixFastify({
    buildDirectory: 'build', // default
    clientDirectory: 'client', // default
    serverDirectory: 'server', // default
    serverBuildFile: 'index.js', // default
    mode: process.env.NODE_ENV || 'development', // default
    fastifyStaticOptions: {}, // default
    viteOptions: {}, // default
}));

app.listen({port: 3000, host: 'localhost'}, (err, address) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server listening at ${address}`);
});
```

3. Add the following script to your `package.json`:

```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development node server.mjs",
    "start": "cross-env NODE_ENV=production node server.mjs"
  }
}
```

4. Run the following command to start the server:

```bash
npm run dev
npm run start
```

OR

```bash
yarn dev
yarn start
```

## License

**[MIT](https://github.com/ExorTek/remix-fastify/blob/master/LICENSE)**<br>

