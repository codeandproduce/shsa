var keystone = require('keystone');
var Types = keystone.Field.Types;

var Team = new keystone.List('Team', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Team.add({
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
  },
  positionChinese:{
    type:String
  },
  image:{
    type: Types.CloudinaryImage
  },
  description:{
    type: String
  },
  descriptionChinese:{
    type:String
  }
});

Team.register();
