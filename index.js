const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    

    // fs.readFile('./views/indez.html', (err, data) => {
    //     if(err) {
    //         console.log(err);
    //         res.end('gick inte')
    //     }

    //     res.end(data)
    // })
    // res.end(index.html)


    switch(req.url) {

        case '/':
        
    }

})

const PORT = process.env.PORT || 9999;

server.listen(PORT, 'localhost', () => {
    console.log('Server running at http://localhost:' + PORT);
})