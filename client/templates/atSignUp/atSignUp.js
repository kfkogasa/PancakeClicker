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

      Meteor.call('createAccount', username, email, password1, function (error) {
        if (error) { //something happened, display error on page
          document.getElementById("error").innerHTML = error.reason;
        }
        else { //redirect to sign-in page after successful registration
          Router.go('atSignIn');
        }
      });
    }
    else { //passwords don't match
      document.getElementById("error").innerHTML = "Passwords do not match";
    }
  }
});
