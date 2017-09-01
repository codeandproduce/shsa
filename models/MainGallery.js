var keystone = require('keystone');
var Types = keystone.Field.Types;

var Main = new keystone.List('main', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Main.add({
  pageName:{
    type:String,
    index:true
  },
  images:{
    type: Types.CloudinaryImage
  }
});

Main.register();
