var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	view.query('whatwedo', keystone.list('What We Do').model.find().sort('sortOrder'));
	view.query('missionstatement', keystone.list('Mission Statement').model.find().sort('sortOrder'));
	// Render the view
	view.render('index');
};
