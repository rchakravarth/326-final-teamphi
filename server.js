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

//const minicrypt = require('./miniCrypt');
//const mc = new minicrypt();

const session = {
    secret : process.env.SECRET || 'SECRET', // set this encryption key in Heroku config (never in GitHub)!
    resave : false,
    saveUninitialized: false
};

// Passport configuration

const strategy = new LocalStrategy(
    async (email, password, done) => {
	if (!findUser(email)) {
	    // no such user
	    return done(null, false, { 'message' : 'Wrong email' });
	}
	if (!validatePassword(email, password)) {
	    // invalid password
	    // should disable logins after N messages
	    // delay return to rate-limit brute-force attacks
	    await new Promise((r) => setTimeout(r, 2000)); // two second delay
	    return done(null, false, { 'message' : 'Wrong password' });
	}
	// success!
	// should create a user object here, associated with a unique identifier
	return done(null, email);
    });


// App configuration

app.use(expressSession(session));
passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname));

// Convert user object to a unique identifier.
passport.serializeUser((email, done) => {
    done(null, email);
});
// Convert a unique identifier to a user object.
passport.deserializeUser((uid, done) => {
    done(null, uid);
});

app.use(express.json()); // allow JSON inputs
app.use(express.urlencoded({'extended' : true})); // allow URLencoded data

/////

// we use an in-memory "database"; this isn't persistent but is easy
let users = { 'usertest@gmail.com' : '123' } // default user
let userMap = {};

// Returns true iff the user exists.
function findUser(username) {
    if (!users[username]) {
	console.log("no user");
	return false;
    } else {
	console.log("found user");
	return true;
    }
}

function validatePassword(name, pwd) {
    if (!findUser(name)) {
	console.log("userfail");
	return false;
    }
    if (users[name] !== pwd) {
	console.log("passfail");
	return false;
    }
    return true;
}

function addUser(name, pwd) {
	if(!findUser(name)) {
		users[name] = pwd;
		return true;
	}
	else {
		return false;
	}
}

function checkLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
	
	next();
    } else {
	
	res.redirect('/login');
    }
}

app.get('/',
	checkLoggedIn,
	(req, res) => {
	    res.send("hello world");
	});

app.post('/login',
	//passport.authenticate('local', { failureRedirect: '/login' }),
	function(req, res) {
	  console.log("hi")
	  res.redirect('/');
	});
  

app.get('/login',
	(req, res) => res.sendFile('sign_in.html',
				   { 'root' : __dirname }));

app.get('/logout', (req, res) => {
    req.logout(); 
    res.redirect('/login'); 
});

app.get('/meal',
	(req, res) => res.sendFile('meal_builder.html',
					{'root' : _dirname}));
	

app.post('/register',
	 (req, res) => {
	     const email = req.body['email'];
	     const password = req.body['password'];
		 if (addUser(email, password)) {
			console.log(users);
			res.redirect('/login');
		 }
		 else {
			 res.redirect('/register');
		 }
	 });

app.get('/register',
	(req, res) => res.sendFile('register.html',
				   { 'root' : __dirname }));



app.use(express.static('html'));

app.get('*', (req, res) => {
  res.send('Error');
});

app.listen(port, () => {
    console.log(`App now listening at http://localhost:${port}`);
});
