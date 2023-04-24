import express from  'express';
import auth from './middlewares/auth.middleware.js'

const server = express();

// Middleware
server.use(express.json());


// Routers


export { server }


