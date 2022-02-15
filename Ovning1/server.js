const http = require('http')
const path = require('path')
const fs = require('fs')


const server = http.createServer((request, response) => {
    console.log('request made');
    console.log(request.url);

    if(request.url === '/') {
        response.end('./views/index.html')
    }
   

})


server.listen(9999, () => console.log('Servern körs på http://localhost:9999'));


console.log(path.dirname(__filename));