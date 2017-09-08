var keystone = require('keystone');


var ChineseMissionStatement = new keystone.List('Chinese Mission Statement', {
  autokey: { from: 'missionTitle', path: 'key', unique:true }
});

ChineseMissionStatement.add({
  missionTitle: {
    type: String,
    required: true,
    index:true,
    initial:true
  },
  text:{
    type:String
  }
});

ChineseMissionStatement.register();
