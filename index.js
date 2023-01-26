const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const server = express();

server.get("/", (request, response) => {
    response.json({
        message: "Hello World!"
    });
});

server.get("/healthcheck", (request, response) => {
    response.json({
        status: "success"
    });
});

const port = process.env.SERVER_PORT || 8080;
server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

module.exports = server;
