var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var ContinentSchema = new mongoose.Schema({
  nameRo: {
    type: String,
    required: true
  },
  nameEn: {
    type: String,
    required: true
  }
});

ContinentSchema.plugin(mongoosePaginate);
const ContinentModel = mongoose.model('Continent', ContinentSchema);

module.exports = ContinentModel;
