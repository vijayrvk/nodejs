var express = require('express');
var app = express();
var request = require('request');
var apiKey = '04d251f7a68951ba6a40a5fbd342d';
var requestUrl = 'https://api.worldweatheronline.com/premium/v1/weather.ashx?q=liverpool+uk&num_of_days=5&tp=24&format=json&key=' apiKey;

app.use("/icons", express.static(__dirname + "/icons/world-weather-online-set/PNGs_64x64/day"));
app.use("/", express.static(__dirname));

function dayOfWeekAsString(dayIndex) {
    return ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][dayIndex];
}

app.get('/', function (req, res) {
   res.end("Hello World!");
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Your app listening at http://%s:%s', host, port);
});