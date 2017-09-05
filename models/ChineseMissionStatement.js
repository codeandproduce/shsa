var keystone = require('keystone');

var ChineseMissionStatement = new keystone.List('Chinese Mission Statement', {
  autokey: { from: 'name', path: 'key', unique: true }
});

ChineseMissionStatement.add({
  mission:{
    type:String
  },
  text:{
    type:String
  }
});

ChineseMissionStatement.register();
