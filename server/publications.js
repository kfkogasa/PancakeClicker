/**
 * publish DB collections
 */
Meteor.publish('topScores', function () {
  return TopScore.find();
});