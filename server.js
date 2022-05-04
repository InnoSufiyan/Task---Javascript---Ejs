var express = require('express');
var app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded())

app.use(express.json())

app.use(express.static(__dirname + '/public'));

const count = 0;

// index page
app.post('/', function(req,res) {
    console.log(parseInt(req.body.value))
    console.log(req.body)
    res.render('list', {title: 'Test' , count: parseInt(req.body.value)})
})
app.get('/', function(req, res) {
  res.render('list', { title: 'Test' , count: count});
});

app.listen(port, ()=> {
    console.log(`listening on the port no at ${port}`)
})