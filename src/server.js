import express from  'express';
import routerUsers from './routers/user.router.js';
const server = express();

// Middleware
server.use(express.json());

// Routers
server.use('/users', routerUsers);


export { server }