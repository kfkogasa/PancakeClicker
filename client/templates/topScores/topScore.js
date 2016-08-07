Template.topScores.helpers({
  /**
   * returns Object containing data from TopScores Collection
   */
  'user': function(){
    return TopScore.find();
  }
});