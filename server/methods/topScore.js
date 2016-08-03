Meteor.methods({

  /**
   * Returns current user's top score
   * If none exists, returns 0
   */
  findTopScore: function() {
    var topScore = TopScore.findOne({
      owner: Meteor.userId()
    });

    // no top score in DB
    if (!topScore) {
      return 0;
    }

    //return top score
    else {
      return topScore;
    }
  },

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
    //update the top score for this user
    else {
      TopScore.update({owner: Meteor.userId()},
        {
          $set: {
          topScore: score
          }
      });
    }
  }
});