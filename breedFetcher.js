const request = require('request');

//const request = require('request');
//error, response,
const fetchBreedDescription = function(breedName, callback) {
  // This function should call the callback with either an error if there's a error or null if there isn't, for the first argument.
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    
    const data = JSON.parse(body);
    if (!data.length) {
      return callback(`error: ${breedName} not found`, null);
    }

    callback(null, data[0].description);

  });
};

//fetchBreedDescription(breedName);

module.exports = { fetchBreedDescription };