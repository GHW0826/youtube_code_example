const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url ==='/')
        res.end('Welcolme');
    else if (req.url === '/about')
        res.end('about');
    else {
        res.end(`<h1>Oops!</h1>
             <p>not fount 404</p>
             <a href="/">home</a>`);
    }
});

server.listen(5000);