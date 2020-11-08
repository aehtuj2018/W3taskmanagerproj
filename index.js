const express=require('express');
const cors = require('cors')
const app =new express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello World');

});

//console message: displindex.jsay server running 
app.listen(3050, function(){

    console.log('server running on port 3050');
});