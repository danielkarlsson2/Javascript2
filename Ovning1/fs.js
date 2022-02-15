const fs = require('fs')

fs.readFile('./views/index.html', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(data);
    return
})