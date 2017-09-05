var keystone = require('keystone');

var ChineseWhatWeDo = new keystone.List('Chinese What We Do', {
  autokey: { from: 'name', path: 'key', unique: true }
});

ChineseWhatWeDo.add({
  heading:{
    type:String
  },
  text:{
    type:String
  }
});

ChineseWhatWeDo.register();
