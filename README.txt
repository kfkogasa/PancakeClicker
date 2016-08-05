# PancakeClicker

ICS 491

Date: July 28, 2016

Team Beta:
Kevin Beydler
Kristin Kogasaka
Sean Baran

Kristin will be creating the layout of the website
Sean and Kevin will be developing the Pancake Clicker Application

VERSION 1:
--------------
7/19/2016
  Repository created, everyone added to it as collaborators
7/19/16
  added accounts-ui and accounts-password for user accounts -kris
  added useraccounts:iron-routing, iron:router and active-route package to add routes and configurations for navigation -kris
  added twbs:bootstrap for styling -kris
  navbar and register/login done (register/login still currently only using email) -kris
7/22/2016
  added HTML to display Java applet file - kevin
  updated HTML to display the pancake object in a box - kevin
  updated Javascript to color pancake, created Stylesheet - sean
7/23/16
  all templates created with routes and route permissions -kris
  HTML_Display file integrated into playGame.html -kris
  moved stylesheet to appropriate directory (also changed background color) -kris

TODO:
Responsiveness for the Pancake to actually count the clicks.
Top Scores and User Profile pages.

Potentials:
A page that allows the user to get their forgotten user/password sent to their email if forgotten.
More responsiveness or additions to the Pancake clicker.
Login with username instead of email

------------------

VERSION 2:
------------------

Kristin:
Created register page to override the default.  JavaScript files created on client and server side to create account.  Tested to ensure username and email must not be associated with another account.
Proper error handling for user inputs (all fields required, password is entered twice and must match, username already exists, email already exists). Users are notified of error.
Redirect user to sign-in page after successful registration.

Kevin: 
1) Made 404 Not Found (redirect to this page if any URLs are invalid to prevent any possible exploit/injection). 
2) Installed a temp clicking object that increments per each click made by the client-side user and shows how many clicks were made.
3) Made "Save Button" prototype (intend to make it actually save the score to the sql db or display it to the topscore page)
4) Cleaned up code, Commented and explained most of the code for playGame.html

Sean: 
1) Worked on the clickability of the actual pancake object. Still need to restrict it to just the actual pancake rather than the canvas


Projections:
- Considering separating the Js from the HTML of the Pancake game and call the Js using the HTML so that multiple HTML files can call the same Js and potentially allow for a scores page and game to be in sync with the number of clicks.
- Implementing a scoring system


------------------

VERSION 3:
------------------
Kristin:
Logout function added
Fixed navbar icons
Created TopScore Collection to hold user's top scores, topScores can be modified only by the user it is associated with (through the pancake clicker game)
Profile page displays username, email, and current top score
Added Privacy Disclosure to Register Page
Edited home page to display links based on whether or not logged in

------------------

Sean:

Removed links from bottom of Top Scores and Play Game

