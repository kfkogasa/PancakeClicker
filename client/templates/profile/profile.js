Template.profile.onRendered(function () {
  var topScore = Meteor.call("findTopScore");
  //user doesn't have a score yet, display 0
  if (!topScore) {
    var displayScore = 0;
  }
  //otherwise display the top score in the DB
  else {
    var displayScore = topScore;
  }
  document.getElementById('topScore').innerHTML = displayScore;
});