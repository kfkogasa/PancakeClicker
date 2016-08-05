Template.playGame.onRendered(function () {

  var count = 0; //counts # clicks
  var c = document.getElementById("Pancake"); //variable element for the pancake obj
  var display = document.getElementById("displayCount"); //displays # of clicks during user session

  // draw the pancake object
  var ctx = c.getContext("2d");
  ctx.beginPath(); //begins drawing the circle
  ctx.arc(195, 180, 140, 0, 2 * Math.PI); //specs for circle for the Pancake obj
  ctx.stroke(); //draws the actual circle obj for Pancake with previous specs
  ctx.fillStyle = "#ffd480"; //Pancake "Wheat" color declaration
  ctx.fill(); //fills in the previous color to the Pancake itself

  //Function: Increments +1 for every click made to the Pancake object.
  document.getElementById("Pancake").addEventListener("click", function(){
  count++; //counts per click
  display.innerHTML = count; //passes the number of clicks to an HTML caller
  document.getElementById("count").innerHTML = count;
  });
});

Template.playGame.events({
  "click #save": function () {
    var score = document.getElementById("displayCount").innerHTML;
    Meteor.call("updateTopScore", score); //check database and update user's top score if necessary
  },
});