'use strict';
var  mongoose = require('mongoose');
require('mongoose-type-url');
var Schema = mongoose.Schema;



var SiteSchema = new Schema({

  url:{
    type : mongoose.SchemaTypes.Url,
    default: "http://127.0.0.1:3000/sites/:siteId"
  },
  siteid : {
    type: String ,
    require: "Please Enter the Id",
    default: "N/A",
  },
  Created_date:{
    type: Date ,
    default: Date.now
  },
  Owner: {
    type: String,
    default: "No Name",
  },
  Group_Chat_Allowed:{
    type:[{
      type: String,
      enum: ['yes','no']
    }],
    default:['no']

  },
  Max_messages_Allowed:{
    type: Number,
    default: 0 ,
  },
  Number_of_users:{
    type: Number,
    default:0,
  },
});

module.exports = mongoose.model('Site', SiteSchema);
