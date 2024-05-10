const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')


const app = express()

app.use(express.json({ extended: false, limit: '50mb' }));
app.use(express.urlencoded({limit: '50mb'}));
app.use(morgan("dev"));

app.use(express.static("static"))

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');


const home = require("./server/pages/home")
app.get('/', home.page);

const okna = require("./server/pages/okna")
app.get('/okna', okna.page);

const balconi = require("./server/pages/balconi")
app.get('/balconi', balconi.page);

const remont = require("./server/pages/remont")
app.get('/remont', remont.page);

const komplektuyuschie = require("./server/pages/komplektuyuschie")
app.get('/komplektuyuschie', komplektuyuschie.page);


const formSubmit = require("./server/data/formSubmit")
app.route("/api/submit")
.post(formSubmit.submut)



const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
})