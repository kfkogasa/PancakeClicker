AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout', redirect: '/',});
//AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'}); default taken out, using custom register for more fields
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});
