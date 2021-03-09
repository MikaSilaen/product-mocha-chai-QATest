let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let Product = new Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true, min: 1 },
      status: { type: Boolean, required: true },    
    }, 
    { 
      versionKey: false
    }
  );

  //Exports the Product for use elsewhere.
module.exports = mongoose.model('book', Product);