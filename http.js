const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage');
    }
    else if(req.url === '/about'){
        res.end('Here is our short history');
    }
    else{
        res.end(`
        <h1 style='color:red'> OOPS! </h1><br>
        <p>We cant seem to find the page</p>
        <a href="/">click</a>
        `)
    }
});

server.listen(5000);