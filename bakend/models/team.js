const mongoose=require('mongoose');
const teamSchema=mongoose.Schema({
    name:String,
    stadium:String,
    owner:String
});
const team=mongoose.model('Team',teamSchema);
module.exports=team;