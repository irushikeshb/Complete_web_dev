const express = require('express');
const app = express();

// Static Routes
app.get('/',(req,res) =>{
	res.send('<h1>Welcome to express Server</h1>')
})
app.get('/About',(req,res) =>{
	res.send('<h2>welcome to About Page</h2>')
})
// Dynamic Route
app.get('/Users/:id',(req,res) =>{
    const id = req.params.id
    res.send(`<h2> Welcome User ${id} </h2>`)
})

// Route Using a controller
const controller = require('./Controllers/controller')
app.get('/product',controller.products)

// 404 Route
app.use(function(req,res,next){
	res.status(404).send('<h1>ERROR 404</h1><br><h2>Sorry! Page Not Found !!</h2>')
})


const PORT = 4000;
app.listen(PORT,()=>{ 
	console.log(`Server Started at PORT ${PORT}`);
})