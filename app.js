require('dotenv').config()
const port=process.env.PORT

const express = require('express')
const app = express()

//servir un conteido estandar 
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Home Page')
});

app.get('/Hola-mundo', function (req, res) {
    res.send('Hello World con su respectiva ruta')
  });

app.get('/*', (req, res)=> {
    res.sendFile(__dirname+'/public/404.html')
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })