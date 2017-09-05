var keystone = require('keystone');

var MissionStatement = new keystone.List('Mission Statement', {
  autokey: { from: 'name', path: 'key', unique: true }
});

MissionStatement.add({
  mission:{
    type:String
  },
  text:{
    type:String
  }
});

MissionStatement.register();
