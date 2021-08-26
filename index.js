const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv;
const breedName = (args.slice(2,3)[0]);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }
});