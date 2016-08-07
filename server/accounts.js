Meteor.methods({

  /**
   * Creates new user in Database if username and email are not associated with an account
   * @param username
   * @param email
   * @param password
   */
  'createAccount': function (username, email, password) {
    Accounts.createUser({
      username: username,
      email: email,
      password: password
    })
  },

});