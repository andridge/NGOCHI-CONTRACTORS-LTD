var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();
// set the view engine to ejs
//app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
/*app.get('/', function(req, res) {
  res.render('pages/index');
});*/
app.use( express.static(path.join(__dirname, '/public')));
app.use( express.static(path.join(__dirname, '/images')));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(1001);
console.log('Server is listening on port 1001');