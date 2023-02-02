//require all documents first
const express = require ('express');
const axios = require('axios')
//create express app
const app = express();
// write down all app.use
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

















app.get('/', (req,res) =>{
    res.send("working on server port 5000")
})









app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
});