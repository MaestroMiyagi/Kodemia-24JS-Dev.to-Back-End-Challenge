import express from  'express';
import routerUsers from './routers/user.router.js';
import routerPosts from './routers/post.router.js'
import auth from './middlewares/auth.middleware.js'

const server = express();

// Middleware
server.use(express.json());

// Routers
server.use('/users', routerUsers);
server.use('/posts', routerPosts)


export { server }