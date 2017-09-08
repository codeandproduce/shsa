var keystone = require('keystone');

var MissionStatement = new keystone.List('Mission Statement', {
  autokey: { from: 'mission', path: 'key', unique: true }
});

MissionStatement.add({
  mission:{
    type:String,
    required:true,
    index:true,
    initial:true
  },
  text:{
    type:String
  }
});

MissionStatement.register();
