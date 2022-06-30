const express = require('express'); 
const hbs = require('express-handlebars')

const app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine()); 

app.get('/', (req, res)=>  res.render('index'));
app.use('/bootstrap-css', express.static(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'))
app.use('/bootstrap-js', express.static(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js'))


app.listen(3000, () => console.log("Server ON"));
