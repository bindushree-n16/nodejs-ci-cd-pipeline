
const http = require('http');

function createServer() {
    return http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello! My CI/CD Pipeline is Working!');
    });
}

if (require.main === module) {
    const server = createServer();

    server.listen(3000, () => {
        console.log('Application running on port 3000');
    });
}

module.exports = { createServer };
