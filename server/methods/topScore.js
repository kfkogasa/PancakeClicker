Meteor.methods({
  /**
   * Creates top score entry if non exists yet,
   * otherwise updates the current top score entry
   */
  updateTopScore: function(score) {
    var topScore = TopScore.findOne({
      owner: Meteor.userId()
    });

    //no score for this user yet, create new
    if (!topScore) {
      TopScore.insert({
      topScore: score,
      owner: Meteor.userId()
      });
    }
    //update the top score for this user if current score is higher than score in DB
    else if (Number(score) > Number(topScore.topScore)) {
      TopScore.update({owner: Meteor.userId()},
        {
          $set: {
          topScore: score
          }
      });
    }
  }
});