//this is user schema, which is then used to build a model of DB 

var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: {type: String},
  email: {type: String},
  mobile: {type : Number},
  password:  {type: String}
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');