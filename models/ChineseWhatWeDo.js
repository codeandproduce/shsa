var keystone = require('keystone');

var ChineseWhatWeDo = new keystone.List('Chinese What We Do', {
  autokey: { from: 'heading', path: 'key', unique: true }
});

ChineseWhatWeDo.add({
  heading:{
    type: String,
    required: true,
    index: true,
    initial:true
  },
  text:{
    type:String
  }
});

ChineseWhatWeDo.register();
