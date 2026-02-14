const express = require('express')
const app = express();

app.get('/', function(req, res) {
    res.send('Hello world')
})

app.get('/api/resource', function(req, res) {
    const myJson = { 
        id: 1, 
        name: "Sitthikorn"
    }
    res.send(myJson)
})



 app.listen(3000, function(){ 
    console.log('Server is running on PORT 3000')
 })