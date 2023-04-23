import express from  'express';
const server = express();

// Middleware
server.use(express.json());

// Routers

export { server }