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
  position:{
    type: String
  },
  image:{
    type: Types.CloudinaryImage
  },
  description:{
    type: String
  }
});

Team.register();
