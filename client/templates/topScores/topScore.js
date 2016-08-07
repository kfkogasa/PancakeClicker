Template.topScores.helpers({
  /**
   * returns Object containing data from TopScores Collection
   * results sorted by highest score first
   */
  'user': function(){
    return TopScore.find({}, {sort: {topScore: 1}});
  },

  //returns username associated with an id
  'username': function(owner) {
    return Meteor.users.findOne({_id: owner}).username;
  }
});