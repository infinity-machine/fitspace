// const axios = require("axios");
// require('dotenv').config();

//-------------------------------list of exercises----------------------------

// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises',
//   headers: {
//     'X-RapidAPI-Key': process.env.FIT_DB_KEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//-----------------------------list of body parts------------------------------

// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//   headers: {
//     'X-RapidAPI-Key': 'process.env.FIT_DB_KEY',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//---------------------------list of target muscles----------------------------

// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
//   headers: {
//     'X-RapidAPI-Key': process.env.FIT_DB_KEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//---------------------------list of equipment----------------------------------


// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/equipmentList',
//   headers: {
//     'X-RapidAPI-Key': process.env.FIT_DB_KEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//---------------------------list by body part--------------------------------

// const bodypart = ['back','cardio','chest','lower arms','lower legs','neck','shoulders','upper arms','upper legs','waist']

//'upper arms' url 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20arms'
//'chest' url 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest'

// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/%7BbodyPart%7D',
//   headers: {
//     'X-RapidAPI-Key': process.env.FIT_DB_KEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//---------------------------list by target muscle------------------------------

//  const targetMuscle = ["abductors","abs","adductors","biceps","calves","cardiovascular system","delts","forearms","glutes","hamstrings","lats","levator scapulae","pectorals","quads","serratus anterior","spine","traps","triceps","upper back"]

// // 'levator scapulae' url 'https://exercisedb.p.rapidapi.com/exercises/target/levator%20scapulae'

// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/target/%7Btarget%7D',
//   headers: {
//     'X-RapidAPI-Key': process.env.FIT_DB_KEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//--------------------------------list by equipment-----------------------------------

// const equipment = ["assisted","band","barbell","body weight","bosu ball","cable","dumbbell","elliptical machine","ez barbell","hammer","kettlebell","leverage machine",
// "medicine ball","olympic barbell","resistance band","roller","rope","skierg machine","sled machine","smith machine","stability ball","stationary bike",
// "stepmill machine","tire","trap bar","upper body ergometer","weighted","wheel roller"]

// 'upper body ergometer' url 'https://exercisedb.p.rapidapi.com/exercises/equipment/upper%20body%20ergometer'

// function formatSelection (selection) {
//     let new_string = selection.replace(/ /g,'%20')
//     return new_string
// }

// let string = 'https://exercisedb.p.rapidapi.com/exercises/equipment/'

// console.log(string.concat('',formatSelection(equipment[25])))



// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/equipment/',
//   headers: {
//     'X-RapidAPI-Key': process.env.FIT_DB_KEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };


// console.log(options.url)
// console.log(string.concat('',formatSelection(equipment[25])))


// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//-----------------------------------------------SANDBOX-------------------------------------------------------
const axios = require("axios");
require('dotenv').config();


const equipment = ["assisted","band","barbell","body weight","bosu ball","cable","dumbbell","elliptical machine","ez barbell","hammer","kettlebell","leverage machine",
"medicine ball","olympic barbell","resistance band","roller","rope","skierg machine","sled machine","smith machine","stability ball","stationary bike",
"stepmill machine","tire","trap bar","upper body ergometer","weighted","wheel roller"] //28 items

const targetMuscle = ["abductors","abs","adductors","biceps","calves","cardiovascular system","delts","forearms","glutes","hamstrings","lats","levator scapulae",
"pectorals","quads","serratus anterior","spine","traps","triceps","upper back"] //19 items

const bodypart = ['back','cardio','chest','lower arms','lower legs','neck','shoulders','upper arms','upper legs','waist'] //10 items


function formatSelection (selection) {
    let new_string = selection.replace(/ /g,'%20')
    return new_string
}

//list of exercises   url: 'https://exercisedb.p.rapidapi.com/exercises',
//by target muscles   url: 'https://exercisedb.p.rapidapi.com/exercises/target/',
//by body part        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/',
//by equipment        url: 'https://exercisedb.p.rapidapi.com/exercises/equipment/',


const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': process.env.FIT_DB_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

//   axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });



function testfunc (api_info) {
    axios.request(api_info).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}