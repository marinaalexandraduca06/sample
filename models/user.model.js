var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  permissions: {
    type: [String],
    required: true,
    enum: [
      'VIEW_CONTENT',
      'VIEW_RATINGS',
      'VIEW_PROFILE',
      'ADD_RATINGS',
      'MARK_AS_VISITED',
      'ADD_TO_WISH_LIST',
      'SUGGEST_DESTINATION',
      'ADD_CONTENT',
      'EDIT_CONTENT',
      'ADD_USER_PERMISSION',
      'REMOVE_USER_PERMISSION'
    ],
    default: [
      'VIEW_CONTENT',
      'VIEW_RATINGS',
      'VIEW_PROFILE',
      'ADD_RATINGS',
      'MARK_AS_VISITED',
      'ADD_TO_WISH_LIST',
      'SUGGEST_DESTINATION'
    ]
  }
});

UserSchema.plugin(mongoosePaginate);
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
