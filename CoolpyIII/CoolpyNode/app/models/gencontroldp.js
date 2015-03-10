var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var Schema = mongoose.Schema;

var gencontroldpSchema = new Schema({
    dvid: Number,
    ssid: Number,
    value: { type: String, required: true }
});

module.exports = mongoose.model('gencontroldp', gencontroldpSchema);