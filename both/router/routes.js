/**
 * Routes for all tabs
 */
Router.route('/', {
  name: 'home'
});

Router.route('/topScores', {
  name: 'topScores'
});

Router.route('/playGame', {
  name: 'playGame'
});

Router.route('/profile', {
  name: 'profile'
});

Router.route('/sign-up', {
  name: 'atSignUp',
  redirect: 'atSignIn'
});

/**
 * Users must be logged in to play game or view user profile
 */
Router.plugin('ensureSignedIn', {
  only: ['playGame', 'profile']
});