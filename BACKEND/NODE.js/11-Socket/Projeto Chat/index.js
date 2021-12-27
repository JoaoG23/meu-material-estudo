const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static( path.join(__dirname, 'public' )));
let door = 3000;
app.listen(door, () => 
console.log(" All Services Started", door ));