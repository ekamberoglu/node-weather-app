const request = require('request');

var getWeather = ((lat, lng, callback) => {
  var url = `https://api.darksky.net/forecast/cef459af5c612804940e48720c134fad/${lat},${lng}`;

  request({
    url: url,
    json: true
  }, (error, response, body) => { 
    if (!error && response.statusCode === 200) {
      //console.log(body.currently.temperature);
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      //console.log('Unable to fetch weather');
      callback('Unable to fetch weather');
    }
  });
});

module.exports.getWeather = getWeather;
