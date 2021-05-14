const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req)
    if(req.url === '/'){
        res.end('Welcome to the Homepage')
    }
    if(req.url === '/about'){
        res.end('Now this is a story all about how my life got flipped\nturned upsidedown')
    }
    res.end(`<h1>Oops!</h1>
    <p>This doesn't seem to be a woeking url :(<p>
    <a href="/">back home</a>`
    );
    //res.write('This is The Homepage')
    //res.end();
})

server.listen(5000) //port number, which is random at this point

