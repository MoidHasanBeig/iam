const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use('/node_modules',express.static(__dirname + '/node_modules'));

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/html/index.html");

  // let options_location = {
  //   url: "http://api.ipstack.com/check",
  //   method: "GET",
  //   qs: {
  //     access_key: ""
  //   }
  // };
  //
  // request(options_location, function (error,response,body) {
  //   let data = JSON.parse(body);
  //   let city = data.city;
  //   let id = data.location.geoname_id;
  //
  //   let options_weather = {
  //     url: "https://api.openweathermap.org/data/2.5/weather",
  //     method: "GET",
  //     qs: {
  //       id: id,
  //       units: "metric",
  //       appid: ""
  //     }
  //   };
  //
  //   request(options_weather, function (error,response,body) {
  //     let data = JSON.parse(body);
  //     let weather = data.weather[0].main;
  //     let temp = data.main.temp;
  //
  //     console.log(weather);
  //     console.log(temp);
  //   });
  // });


});

app.listen(4000, () => {
  console.log('Server is live at port 4000');
})
