const express = require('express');
const handleBars = require('express-handlebars');
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;


app.engine('handlebars', handleBars.engine());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));




const ContactSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  address: String,
  purpose: String,
});

const Contact = mongoose.model("Contact", ContactSchema);
const dbURI = process.env.MONGODB_URI;
mongoose
  .connect(dbURI)
  .then((res) => {
    console.log("Connected to Database.");
  })
  .catch((err) => {
    console.log(err);
  });



app.get('/', (req, res) => {
    res.render('home',{
        csspath:"css/home.css",
        helpers:{}
    });
});

app.get('/predict-college', (req, res) => {
    res.render('predict-college',{
        csspath:"css/predict-college.css",
        helpers:{}
    });
});

app.get('/counselling',(req,res)=>{
    res.render('counselling',{
        csspath:"css/counselling.css"
    })
})

app.get('/it-services',(req,res) =>{
    res.render('it-services',{
        csspath:"css/it-services.css",
        helpers:{}
    })
})

app.get('/about-Us',(req,res)=>{
    res.render('about-Us',{
        csspath:"css/about-Us.css",
        helpers:{}
    })
})
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/','index.html'));
// })

// app.get('/home',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/','home/index.html'));
// })

app.post("/contact", async (req, res) => {
    const data = req.body;
    const contact = await Contact.create({
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      purpose: data.purpose,
    });
    console.log(contact);
  });

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})