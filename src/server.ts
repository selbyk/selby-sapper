// import * as sirv from "sirv";
import * as express from 'express';
import * as compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();
const port = PORT;

express() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    // sirv("static", { dev }),
    express.static('static'),
    sapper.middleware(),
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });
