const request = require('request');
const args = process.argv;
const type = (args.slice(2,3)[0]);

//const request = require('request');
//error, response,
request(`https://api.thecatapi.com/v1/breeds/search?q=${type}`, (error, response, body) => {
  if (!error) {
    if (body) {
      const data = JSON.parse(body);
      if (data.length > 0) {
        console.log(data[0].description);
      }
    }
    console.log(`error: ${type} not found`);
  } else {
    console.log(error);
  }
});