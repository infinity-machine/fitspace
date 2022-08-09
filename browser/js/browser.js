// MATERIALIZE
document.addEventListener('DOMContentLoaded', function () { M.AutoInit() })
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
});

// Carousel and Initialization
var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
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
var trigger = document.getElementById('trigger')
trigger.addEventListener('click', generateDropdownList)

// GENERATE DROPDOWN LISTS
function generateDropdownList() {
    eq_ul.innerHTML = '';
    bp_ul.innerHTML = '';
    tm_ul.innerHTML = '';


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
    }
}
// CREATE SINGLE WORKOUT CARD
var cardContainer = document.getElementById('cardContainer')

//Save Button 
// const ElSaveBtn = document.querySelector('.saveBtn');

// ElSaveBtn.addEventListener('click', async _ => {
//   try {     
//     const response = await fetch('/save', {
//       method: 'post',
//       body: {
//         // Your body
//       }
//     });
//     console.log('Completed!', response);
//   } catch(err) {
//     console.error(`Error: ${err}`);
//   }
// })

function myFuncConsole(data){
    let val = data.target.dataset
    let testObj = {
        bodyPart: val.bodypart,
        equipment: val.equipment,
        gifUrl: val.gifurl,
        id: val.id,
        name: val.name,
        target: val.target,
    }

    // console.log(testObj)

    fetch('/posts/save', {
        method: 'post',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(testObj)
    }).then(res => {
        console.log("Request complete! response:", res)
    })


}


// CREATE MULTIPLE WORKOUT CARDS
function createCards(data) {

    cardContainer.innerHTML = '';

    for (i = 0; i < data.length; i++) {
        document.getElementById("cardContainer").innerHTML += `
            <div class="col s3" >
                <div class="card">
                    <div class= "card-content">
                        <h5>${data[i].name} </h5>
                    </div>
                    <div class="card-image">
                        <img src="${data[i].gifUrl}">
                    </div>
                    <div class="card-content">
                        <p>BodyPart: ${data[i].bodyPart} </p>
                        <p>Equipment: ${data[i].equipment} </p>
                    </div>
                    <button class="saveBtn" data-bodyPart="${data[i].bodyPart}" data-equipment="${data[i].equipment}" data-gifUrl="${data[i].gifUrl}" data-id="${data[i].id}" data-name="${data[i].name}" data-target="${data[i].target}"  onClick="myFuncConsole(event)">SAVE</button>
                </div>
            </div>`
        }
        // ElSaveBtn = document.querySelector('#cardContainer');
        // // console.log(ElSaveBtn)
        // ElSaveBtn.addEventListener('click', (data) => {
        //     console.log(event)
        //     console.log('clicked')
        //     })
        // function myFuncConsole(data){
        //     console.log(data)
        // }
}

// FETCH WORKOUT
function fetchWorkout() {

    function formatSelection (selection) {
        let new_string = selection.replace(/ /g,'%20')
        return new_string
    }
    
    let id = event.target.id
    let index = id.slice(1)
    let url = 'https://exercisedb.p.rapidapi.com/exercises'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6a40cc64b1msh74163d5d1be9d62p13d029jsn908fc640738b',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    if (id[0] === "E") {
        url += '/equipment/' + formatSelection(equipment[index])
    } else if (id[0] === "M") {
        url += '/target/' + formatSelection(targetMuscle[index])
    } else if (id[0] === "B") {
        url += '/bodypart/' + formatSelection(bodypart[index])
    }

    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            createCards(response)
        })
        .catch(err => console.error(err));
}

// generateDropdownList()
