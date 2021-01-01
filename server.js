const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const orm = require('./config/orm');
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(express.urlencoded({extended:true }))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(express.static('public'));

const router = require('./controllers/controller');
app.use(router);



app.listen(PORT, () => {
    console.log('Listening on port 5050.')
});