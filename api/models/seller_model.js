'use strict';
var  mongoose = require('mongoose');
require('mongoose-type-url');
var Schema = mongoose.Schema;



var SellerSchema = new Schema({
  seller:{
    type:Schema.Types.ObjectId,ref:'sel_User',
    unique:true,
  },

});

module.exports = mongoose.model('sel_Seller', SellerSchema);
