// MATERIALIZE
document.addEventListener('DOMContentLoaded', function () { M.AutoInit() })
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
});
var instance = M.Carousel.init({
    fullWidth: true
});

// DROPDOWN ARRAYS
const equipment = ["assisted", "band", "barbell", "body weight", "bosu ball", "cable", "dumbbell", "elliptical machine", "ez barbell", "hammer", "kettlebell", "leverage machine",
    "medicine ball", "olympic barbell", "resistance band", "roller", "rope", "skierg machine", "sled machine", "smith machine", "stability ball", "stationary bike",
    "stepmill machine", "tire", "trap bar", "upper body ergometer", "weighted", "wheel roller"] //28 items

const targetMuscle = ["abductors", "abs", "adductors", "biceps", "calves", "cardiovascular system", "delts", "forearms", "glutes", "hamstrings", "lats", "levator scapulae",
    "pectorals", "quads", "serratus anterior", "spine", "traps", "triceps", "upper back"] //19 items

const bodypart = ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'] //10 items

// DOCUMENT GRABS
var eq_ul = document.getElementById('Equipment');
var bp_ul = document.getElementById('BodyPart')
var tm_ul = document.getElementById('TargetMuscle')
// EQUIPMENT DROPDOWN
for (i = 0; i < equipment.length; i++) {
    eq_li = document.createElement('li')
    eq_li.setAttribute('id', `E${i}`)
    eq_li.innerText = equipment[i]
    eq_ul.appendChild(eq_li)
    eq_li.addEventListener('click', fetchWorkout)
}
// TARGETMUSCLE DROPDOWN
for (i = 0; i < targetMuscle.length; i++) {
    tm_li = document.createElement('li')
    tm_li.setAttribute('id', `B${i}`)
    tm_li.innerText = targetMuscle[i]
    tm_ul.appendChild(tm_li)
    tm_li.addEventListener('click', fetchWorkout)
}
// BODYPART DROPDOWN
for (i = 0; i < bodypart.length; i++) {
    bp_li = document.createElement('li')
    bp_li.setAttribute('id', `M${i}`)
    bp_li.innerText = bodypart[i]
    bp_ul.appendChild(bp_li)
    bp_li.addEventListener('click', fetchWorkout)
    console.log(bodypart[i])
}

// CREATE SINGLE WORKOUT CARD
var cardContainer = document.getElementById('cardContainer')
function createCard(data) {
    var workoutCard = document.createElement('div');
    var cardname = document.createElement('p')
    var cardbp = document.createElement('p')
    var cardeq = document.createElement('p')
    var cardgif = document.createElement('img')
    cardname.innerText = data.name
    cardbp.innerText = data.bodyPart
    cardeq.innerText = data.equipment
    cardgif.setAttribute('src', data.gifUrl)
    workoutCard.appendChild(cardname)
    workoutCard.appendChild(cardbp)
    workoutCard.appendChild(cardeq)
    workoutCard.appendChild(cardgif)
    cardContainer.appendChild(workoutCard)
}
// CREATE MULTIPLE WORKOUT CARDS
function createCards(data) {
    for (i = 0; i < data.length; i++) {
        createCard(data[i])
    }
}
// FETCH WORKOUT
function fetchWorkout() {
    console.log(event.target)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6a40cc64b1msh74163d5d1be9d62p13d029jsn908fc640738b',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    fetch('https://exercisedb.p.rapidapi.com/exercises/target/levator%20scapulae', options)
        .then(response => response.json())
        .then(response => {
           console.log(response)
           createCards(response)
        })
        .catch(err => console.error(err));

}
