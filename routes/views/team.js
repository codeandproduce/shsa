var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'team';
  view.query('teammembers', keystone.list('Team').model.find().sort('sortOrder'));

  view.render('team');
}
