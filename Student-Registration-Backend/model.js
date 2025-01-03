const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    name: String,
});

const user = mongoose.model('User', userSchema);

module.exports = user;