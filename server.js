const express = require('express');
const handleBars = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');

app.engine('handlebars', handleBars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    res.render('home',{
        layout : false
    });
});

app.get('/predict-college', (req, res) => {
    res.render('predict-college',{
        layout : false
    });
});

app.get('/counselling',(req,res)=>{
    res.render('counselling',{
        layout:false
    })
})

app.get('/it-services',(req,res) =>{
    res.render('it-services',{
        layout : false
    })
})

app.get('/about-Us',(req,res)=>{
    res.render('about-Us',{
        layout:false
    })
})
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/','index.html'));
// })

// app.get('/home',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/','home/index.html'));
// })

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})