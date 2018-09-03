const express = require('express');
const app = express();

const PORT =  process.env.PORT || 5000;   

app.get('/', (req, res) => {

 
res.send({msg: 'Welcome to BN & Rana Almirahs P Ltd.'});

})

console.log(PORT);
app.listen(PORT);