var keystone = require('keystone');

var WhatWeDo = new keystone.List('What We Do',{
  autokey: { from: 'name', path: 'key', unique: true }
});

WhatWeDo.add({
  heading:{
    type:String
  },
  text:{
    type:String
  }
});
WhatWeDo.register();
