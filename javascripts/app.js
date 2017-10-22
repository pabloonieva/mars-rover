// Rover Object Goes Here
// ======================
var rover = {
  direction: ["N","S","E","W"],
  x: 0,
  y: 0,
  travelLog: []
};

var mars = [
  [],[],[],[],[],[],[],[],[],[]
];

// ======================
function showMars(mars){
  for(var i = 0; i < mars.length; i ++){
    console.log(mars[i] + "\n");
  }
}

function createObstacles(mars,numObstacles){
  if (numObstacles >= 0 && numObstacles <= 20){
    for(i=0;i<numObstacles;i++){
      mars.x = getRandomPosition();
      mars.y = getRandomPosition();
      if(mars[x][y]==null){
        mars[x][y]= "O";
      }
    }
  }
}
function getRandomObstacle(){
  return Math.floor(Math.random () * 9);
}

function turnLeft(rover){
  console.log("Actual direction is: " + rover.direction);
  console.log("turnLeft was called");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Great! New direction is: " + rover.direction);
      break;
    case "W":
      rover.direction = "S";
      console.log("Great! New direction is: " + rover.direction);
      break;
    case "S":
      rover.direction = "E";
      console.log("Great! New direction is: " + rover.direction);
      break;
    case "E":
      rover.direction = "N";
      console.log("Great! New direction is: " + rover.direction);
      break;
    default:

  }


  /*If(rover.direction == "N"){
    rover.direction = "E";
    console.log("New direction is: " + rover.direction);
  }else if(rover.direction == "S"){
    rover.direction = "W";
    console.log("New direction is: " + rover.direction);
  }else if (rover.direction == "E"){
    rover.direction = "S";
    console.log("New direction is: " + rover.direction);
  }else {
    rover.direction = "N";
    console.log("New direction is: " + rover.direction);
  }*/

}

function turnRight(rover){
  console.log("Actual direction is: " + rover.direction);
  console.log("turnRight was called");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Great! New direction is: " + rover.direction);
      break;
    case "W":
      rover.direction = "N";
      console.log("Great! New direction is: " + rover.direction);
      break;
    case "S":
      rover.direction = "W";
      console.log("Great! New direction is: " + rover.direction);
      break;
    case "E":
      rover.direction = "S";
      console.log("Great! New direction is: " + rover.direction);
      break;
    default:
  }
}

function moveForward(rover){
  //console.log("Actual position is: (" + rover.x + "," + rover.y + ")");
  //console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      if(rover.y == 0){
        console.log("Can't keep going, you are at the end of the map");
        return;
      }
      rover.y -= 1;
      rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
      //console.log("New position: (" + rover.x + "," + rover.y + ")");
      break;
    case "W":
      if(rover.x == 0){
        console.log("Can't keep going, you are at the end of the map");
        return;
      }
      rover.x -= 1;
      //console.log("New position: (" + rover.x + "," + rover.y + ")");
      rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
      break;
    case "S":
      if(rover.y == 9){
        console.log("Can't keep going, you are at the end of the map");
        return;
      }
      rover.y += 1;
      //console.log("New position: (" + rover.x + "," + rover.y + ")");
      rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
      break;
    case "E":
      if(rover.x == 9){
        console.log("Can't keep going, you are at the end of the map");
        return;
      }
      rover.x += 1;
      //console.log("New position: (" + rover.x + "," + rover.y + ")");
      rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
      break;
    default:
  }
}

function moveBackward(rover){
  //console.log("Actual position is: (" + rover.x + "," + rover.y + ")");
  //console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      if(rover.y == 9){
        console.log("Can't go backwards, you are at the end of the map");
        return;
      }
      rover.y += 1;
      rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
      //console.log("New position: (" + rover.x + "," + rover.y + ")");
      break;
    case "W":
      if(rover.x == 9){
        console.log("Can't go backwards, you are at the end of the map");
        return;
      }
      rover.x += 1;
      //console.log("New position: (" + rover.x + "," + rover.y + ")");
      rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
      break;
    case "S":
      if(rover.y == 0){
        console.log("Can't go backwards, you are at the end of the map");
        return;
      }
      rover.y -= 1;
      //console.log("New position: (" + rover.x + "," + rover.y + ")");
      rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
      break;
    case "E":
      if(rover.x == 0){
        console.log("Can't go backwards, you are at the end of the map");
        return;

      }
      rover.x -= 1;
      //console.log("New position: (" + rover.x + "," + rover.y + ")");
      rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
      break;
    default:
  }
}

function commands(command){
  for (i=0;i<command.length;i++){
      if(command[i]== "r"){
        turnRight(rover);
      } else if (command[i]== "l") {
        turnLeft(rover);
      } else if (command[i]== "f") {
        moveForward(rover);
      } else if (command[i]== "b") {
        moveBackward(rover);
      }  else {
        console.log("Your command " + command[i] + " is wrong. Just r,l,f and b are permited");
      }
  }
}

function printTable(mars){
  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      console.log(mars[i][j]);
    }
  }
}
