Template.profile.onRendered(function () {
  /**
   * displays current user's top score
   * If none exists, displays 0
   */
  var scoreInfo = TopScore.findOne({owner: Meteor.userId()});
  //user doesn't have a score in the DB
  if(!scoreInfo) {
    document.getElementById('topScore').innerHTML = "0";
  }
  //display the user's top score
  else {
    document.getElementById('topScore').innerHTML = scoreInfo.topScore;
  }
});