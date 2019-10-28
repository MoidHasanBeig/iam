const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/html/index.html");
})

app.listen(4000, () => {
  console.log('Server is live at port 4000');
})
