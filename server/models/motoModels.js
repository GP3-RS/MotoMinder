const mongoose = require('mongoose');

// let uri = process.env.MONGO_URI

const MONGO_URI = 'mongodb+srv://gahl:peled@motocluster1.kcp1wyh.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'moto'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  done: {type: Boolean, default: false},
  maint: {type: Boolean, required: true}, 
  task: {type: String, required: true},
  cost: Number,
  moto_id: {
    type: Schema.Types.ObjectId,
    ref: 'moto'
  }
});

const Task = mongoose.model('Task', taskSchema);

const motoSchema = new Schema({
  year: Number,
  make: String,
  model: String,
})

const Moto = mongoose.model('Moto', motoSchema);

module.exports = {
  Task,
  Moto
}

