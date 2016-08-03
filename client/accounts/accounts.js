Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

//for displaying username
Template.registerHelper("usernameFromId", function (userId) {
  var user = Meteor.users.findOne(Meteor.userId());
  return user.username;
});

Template.registerHelper("emailFromId", function (userId) {
  var user = Meteor.users.findOne(Meteor.userId());
  return user.emails[0].address;
});