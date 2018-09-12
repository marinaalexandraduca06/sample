var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var CountrySchema = new mongoose.Schema({
  continentId:{
    type: String,
    required: true
  },
  nameRo: {
    type: String,
    required: true
  },
  nameEn: {
    type: String,
    required: true
  }
});

CountrySchema.plugin(mongoosePaginate);
const CountryModel = mongoose.model('Country', CountrySchema);

module.exports = CountryModel;
