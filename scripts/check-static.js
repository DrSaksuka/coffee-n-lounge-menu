const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, '..', 'public', req.url.replace(/^\//, ''));
    console.log('Request for:', req.url, '-> Reading:', filePath);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error:', err);
            res.writeHead(404);
            res.end('Not found');
            return;
        }

        const ext = path.extname(filePath);
        const contentType = {
            '.ico': 'image/x-icon',
            '.png': 'image/png'
        }[ext] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(3001, () => {
    console.log('Test server running at http://localhost:3001');
    console.log('Try: http://localhost:3001/favicon.ico');
});