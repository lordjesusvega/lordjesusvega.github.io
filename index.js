var btn = document.getElementById("counter");
var progressBar = document.getElementById("progressBar");
var goal = document.getElementById("goal");
var x = 0
var undo = 0;

function add(){
    x++;
    updateButton();
    doIncrement(1);
}
function sub(){
  if(x > 0){
     x--;
     updateButton();
     doIncrement(-1);
  }
}

function reset(){
  undo = x;
  x = 0;
  updateButton();
  progressBar.style.width = 0;
}

function undoLast(){
  x = undo;
  updateButton();
  progressBar.style.width = x +'%';
}

function updateButton(){
   btn.innerHTML = x;
}

function changeGoal(){
  let newGoal = prompt("What would you like the new goal to be?");
  goal.innerHTML = newGoal;
}
