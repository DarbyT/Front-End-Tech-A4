const { Button } = require("bootstrap");
const { get } = require("jquery");
const { doc } = require("mocha/lib/reporters");

class Workout {
    constructor (sets, reps) {
    this.sets = sets;
    this.reps = reps;   
    } 
}

class Program {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.workouts = [];
    }
addWorkout(workout){
    this.workouts.push(workout);
}
deleteWorkout(workout){
    let index = this.workouts.indexOf(workout);
    }
}

let programs = [];
let programId = 0;

onclick('new-program', () => {
    programs.push(new programId(programId++, getValue('new-program-name')));
    drawDOM();
})

function onClick(id, action){
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

document.getElementById('add').addEventListener('click', () => {
    let createdDate= new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribue('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-program').value;
    row.insertCell(1).innerHTML = document.getElementById('new-workout').value;
    row.insertCell(0).innerHTML = document.getElementById('new-reps').value;
    row.insertCell(0).innerHTML = document.getElementById('new-sets').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-program').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
