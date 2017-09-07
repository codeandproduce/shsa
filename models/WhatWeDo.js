var keystone = require('keystone');

var WhatWeDo = new keystone.List('What We Do',{
  autokey: { from: 'heading', path: 'key', unique: true }
});

WhatWeDo.add({
  heading:{
    type:String,
    required:true,
    index:true,
    initial:true
  },
  text:{
    type:String
  }
});
WhatWeDo.register();
