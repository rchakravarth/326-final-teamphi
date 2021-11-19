'use strict';

import {createRequire} from 'module';
const require = createRequire(import.meta.url);
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// For loading environment variables.
require('dotenv').config();

const express = require('express');                 // express routing
const expressSession = require('express-session');  // for managing session state
const passport = require('passport');               // handles authentication
const LocalStrategy = require('passport-local').Strategy; // username/password strategy
const app = express();
const port = process.env.PORT || 3000;


// Session configuration

const session = {
    secret : process.env.SECRET || 'SECRET', // set this encryption key in Heroku config (never in GitHub)!
    resave : false,
    saveUninitialized: false
};

// Passport configuration

const strategy = new LocalStrategy(
    async (username, password, done) => {
	if (!findUser(username)) {
	    // no such user
	    return done(null, false, { 'message' : 'Wrong username' });
	}
	if (!validatePassword(username, password)) {
	    // invalid password
	    // should disable logins after N messages
	    // delay return to rate-limit brute-force attacks
	    await new Promise((r) => setTimeout(r, 2000)); // two second delay
	    return done(null, false, { 'message' : 'Wrong password' });
	}
	// success!
	// should create a user object here, associated with a unique identifier
	return done(null, username);
    });


// App configuration

app.use(expressSession(session));
passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname));

// Convert user object to a unique identifier.
passport.serializeUser((user, done) => {
    done(null, user);
});
// Convert a unique identifier to a user object.
passport.deserializeUser((uid, done) => {
    done(null, uid);
});

app.use(express.json()); // allow JSON inputs
app.use(express.urlencoded({'extended' : true})); // allow URLencoded data

/////

// we use an in-memory "database"; this isn't persistent but is easy
let users = { 'emery' : 'compsci326' } // default user
let userMap = {};

// Returns true iff the user exists.
function findUser(username) {
    if (!users[username]) {
	return false;
    } else {
	return true;
    }
}

// Returns true iff the password is the one we have stored (in plaintext = bad but easy).
function validatePassword(name, pwd) {
    if (!findUser(name)) {
	return false;
    }
    if (users[name] !== pwd) {
	return false;
    }
    return true;
}

// Add a user to the "database".
// Return true if added, false otherwise (because it was already there).
// TODO
function addUser(name, pwd) {
	if(!findUser(name)) {
		users[name] = pwd;
		return true;
	}
	else {
		return false;
	}
}

// Routes

function checkLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
	next();
    } else {
	res.redirect('/login');
    }
}

app.get('/user/id/saved-meals',(req, res) => {
    res.send({"name: ": faker.name.findName()})
});

app.get('/user',(req, res) => {
    res.send({"name: ": faker.name.findName()})
});

app.get('/user/new',(req, res) => {
    res.send({"name: ": faker.name.findName()})
});

app.get('/user/id/mealbuilder',(req, res) => {
    res.send({"name: ": faker.name.findName()})
});

app.get('/',
	checkLoggedIn,
	(req, res) => {
	    res.send("hello world");
	});


app.post('/login',
	 passport.authenticate('local' , {     // use username/password authentication
	     'successRedirect' : '/private',   // when we login, go to /private 
	     'failureRedirect' : '/login'      // otherwise, back to login
	 }));

app.get('/login',
	(req, res) => res.sendFile('./sign_in.html',
				   { 'root' : __dirname }));

// Handle logging out (takes us back to the login page).
app.get('/logout', (req, res) => {
    req.logout(); // Logs us out!
    res.redirect('/login'); // back to login
});


// Add a new user and password IFF one doesn't exist already.
// If we successfully add a new user, go to /login, else, back to /register.
// Use req.body to access data (as in, req.body['username']).
// Use res.redirect to change URLs.
// TODO
app.post('/register',
	 (req, res) => {
	     const username = req.body['username'];
	     const password = req.body['password'];
	     // TODO
	     // Check if we successfully added the user.
	     // If so, redirect to '/login'
	     // If not, redirect to '/register'.
		 if (addUser(username, password) === true) {
			res.redirect('/login');
		 }
		 else {
			 res.redirect('/register');
		 }
	 });

app.get('/register',
	(req, res) => res.sendFile('./register.html',
				   { 'root' : __dirname }));

// Private data
app.get('/private',
	// IF we are logged in...
	// TODO
	// Go to the user's page ('/private/' + req.user)
	(req, res) => {
		res.redirect('/private/' + req.user)
	});

// A dummy page for the user.
app.get('/private/:userID/',
	checkLoggedIn, // We also protect this route: authenticated...
	(req, res) => {
	    // Verify this is the right user.
	    if (req.params.userID === req.user) {
		res.writeHead(200, {"Content-Type" : "text/html"});
		res.write('<H1>HELLO ' + req.params.userID + "</H1>");
		res.write('<br/><a href="/logout">click here to logout</a>');
		res.end();
	    } else {
		res.redirect('/private/');
	    }
	});

app.use(express.static('html'));

app.get('*', (req, res) => {
  res.send('Error');
});

app.listen(port, () => {
    console.log(`App now listening at http://localhost:${port}`);
});
