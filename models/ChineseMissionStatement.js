var keystone = require('keystone');


var ChineseMissionStatement = new keystone.List('Chinese Mission Statement', {
  autokey: { from: 'name', path: 'key' }
});

ChineseMissionStatement.add({
  name: {
    type: String,
    required: true,
    index:true
  },
  nameChinese:{
    type:String
  },
  position:{
    type: String
  }
});

ChineseMissionStatement.register();
