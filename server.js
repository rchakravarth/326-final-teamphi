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
const minicrypt = require('./miniCrypt');
const mc = new minicrypt();

const session = {
    secret : process.env.SECRET || 'SECRET', // set this encryption key in Heroku config (never in GitHub)!
    resave : false,
    saveUninitialized: false
};

// Passport configuration


const strategy = new LocalStrategy({
	usernameField: 'email'
},
	async (username, password, done) => {
	if (!findUser(username)) {
		await new Promise((r) => setTimeout(r, 2000)); // two second delay
		return done(null, false, { 'message' : 'Wrong username' });
	}
	if (!validatePassword(username, password)) {
		await new Promise((r) => setTimeout(r, 2000)); // two second delay
		return done(null, false, { 'message' : 'Wrong password' });
	}
	return done(null, username);
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
let users = { 'emery' : [
	'2401f90940e037305f71ffa15275fb0d',
	'61236629f33285cbc73dc563cfc49e96a00396dc9e3a220d7cd5aad0fa2f3827d03d41d55cb2834042119e5f495fc3dc8ba3073429dd5a5a1430888e0d115250'
  ] };
   // default user
let userMap = {};

// Returns true iff the user exists.
function findUser(username) {
    if (!users[username]) {
	
	return false;
    } else {
	
	return true;
    }
}

function validatePassword(name, pwd) {
	console.log("validating pass")
    if (!findUser(name)) {
	
	return false;
    }
	if (!mc.check(pwd, users[name][0], users[name][1])) {
		return false;
		}
		return true;
	}

	function addUser(name, pwd) {
		if (findUser(name)) {
		return false;
		}
		const [salt, hash] = mc.hash(pwd);
		users[name] = [salt, hash];
		return true;
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
	passport.authenticate('local', {
		'failureRedirect' : '/login'
	}),
	function(req, res) {
	  res.redirect('/');
	});
  

app.get('/login',
	(req, res) => res.sendFile('sign_in.html',
				   { 'root' : __dirname }));

app.get('/logout', (req, res) => {
    req.logout(); 
    res.redirect('/login'); 
});

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
app.use(express.static())

app.get('*', (req, res) => {
  res.send('Error');
});

app.listen(port, () => {
    console.log(`App now listening at http://localhost:${port}`);
});
