const mongoose=require('mongoose');
const playerSchema=mongoose.Schema({
    name: String,
    num: Number,
    poste: String,
    team: String,
    age: Number
});
const player=mongoose.model('Player',playerSchema);
module.exports=player;
