const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);


const PORT = process.env.PORT || 8889;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));