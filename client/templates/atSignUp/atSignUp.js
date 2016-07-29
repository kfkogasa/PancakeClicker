/**
 * Prevent default register
 * added in username field
 */

Template.atSignUp.events({
  'submit form': function (event) {
    event.preventDefault();

    //check if passwords match
    var password1 = event.target.password1.value;
    var password2 = event.target.password2.value;

    if (password1 == password2) { //passwords match

      var username = event.target.username.value;
      var email = event.target.email.value;

      Meteor.call('createAccount', username, email, password1);

      Router.go('home');
    }
    else { //passwords don't match
      alert("Passwords do not match.");
    }
  }
});
