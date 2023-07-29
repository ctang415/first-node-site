const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer( (req, res) => {
    var q = url.parse(req.url, true);
    var fileName = "." + q.pathname
    if (q.pathname === "/") {
        fs.readFile('index.html', ( (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'})
                return res.end('404 error found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    }))}
    else if (q.pathname === "/about.html" || q.pathname === "/contact-me.html") {
        fs.readFile(fileName, ( (err, data) => {
        if (err)  {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 error found')
    }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    }))
} else {
    fs.readFile('404.html', ( (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 error found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    }))
}
}).listen(8080)