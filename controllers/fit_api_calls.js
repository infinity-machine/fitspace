const axios = require("axios");
require('dotenv').config();


// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises',
//   headers: {
//     'X-RapidAPI-Key': 'FIT_DB_KEY',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };


// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// console.log(process.env.FIT_DB_KEY)

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
  headers: {
    'X-RapidAPI-Key': process.env.FIT_DB_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});