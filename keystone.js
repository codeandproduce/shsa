// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'SHSA',
	'brand': 'SHSA',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret':process.env.COOKIE_SECRET
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	galleries: 'galleries',
	users: 'users',
	team: [
		'Team',
	],
	IndexPageText:[
		'Mission Statement',
		'What We Do'
	],
	ChineseIndexPageText:[
		'Chinese Mission Statement',
		'Chinese What We Do'
	]
});

// Start Keystone to connect to your database and initialise the web server



keystone.start({
	onHttpServerCreated: function(){
		const {mailing} = require('./utilserver/mail');
		var socketIO = require('socket.io');
		var io = socketIO(keystone.httpServer);
		io.on('connection', (socket) => {
			socket.on('contact-form-submit', (contactMessage)=>{
		    socket.emit('contact-form-processing');
		    mailing(
		      contactMessage.name,
		      contactMessage.email,
		      contactMessage.subject,
		      contactMessage.message
		    ).then(()=>{
		      socket.emit('contact-form-success');
		    }).catch((error) => {
		      socket.emit('contact-form-failure');
		    });
		  });
		});
	}
});

// const socketIO = require('socket.io');
// const express = require('express');
// const http = require('http');
// var app = express();
// var server = http.createServer(app);
// var io = socketIO(server);
//
// io.on('connection', (socket) => {
// 	console.log('connected');
// });
