var keystone = require('keystone');

exports = module.exports = function (req, res){
  var view = new keystone.View(req,res);
  var locals = res.locals;

  locals.section = 'home';

  // view.query('chineseIndex', keystone.list('Chinese Index Page').model.find().sort('sortOrder'));
  view.query('whatwedo', keystone.list('Chinese What We Do').model.find().sort('sortOrder'));
  view.query('missionstatement', keystone.list('Chinese Mission Statement').model.find().sort('sortOrder'));
  view.render('cnindex');
}
