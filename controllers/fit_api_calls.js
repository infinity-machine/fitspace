
const axios = require("axios");
require('dotenv').config();

const equipment = ["assisted","band","barbell","body weight","bosu ball","cable","dumbbell","elliptical machine","ez barbell","hammer","kettlebell","leverage machine",
"medicine ball","olympic barbell","resistance band","roller","rope","skierg machine","sled machine","smith machine","stability ball","stationary bike",
"stepmill machine","tire","trap bar","upper body ergometer","weighted","wheel roller"] //28 items

const targetMuscle = ["abductors","abs","adductors","biceps","calves","cardiovascular system","delts","forearms","glutes","hamstrings","lats","levator scapulae",
"pectorals","quads","serratus anterior","spine","traps","triceps","upper back"] //19 items

const bodypart = ['back','cardio','chest','lower arms','lower legs','neck','shoulders','upper arms','upper legs','waist'] //10 items

const api = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': process.env.FIT_DB_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

function formatSelection (selection) {
    let new_string = selection.replace(/ /g,'%20')
    return new_string
}

const byMuscle = '/target/'
const byBodypart = '/bodypart/'
const byEquipment = '/equipment/'

function get_exercises(api, api_call, selection) {
    api.url = 'https://exercisedb.p.rapidapi.com/exercises'
    
    api.url += api_call + formatSelection(selection)
    console.log(api.url)

    axios.request(api).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

get_exercises(api, byMuscle, targetMuscle[11])
