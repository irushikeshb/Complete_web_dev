const express =  require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

app.use(body.parser.urlencoded{
	extended: true
})

var corsOptions = {
	origin: true
}

app.use(cors(corsOptions))

app.get('/',(req,res)=>{
	res.send('Welcome to Express Server')
})

//import database connection
const db = require('./modules')
db.mongoose.connect(db.url{
	useNewsUrlParse: true,
	useUnifiedTopology: true
}).then(()=>{
	console.log('Connected to Database');
}).catch(err=>{
	console.log('Cannont connect to Database',err);
})


const PORT = 4000;

app.listen(PORT, ()=>{
	console.log(`Server Started at PORT- ${PORT}`);
})