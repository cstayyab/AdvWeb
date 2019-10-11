var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://127.0.0.1:27017/mydb", (err) => {
    if (err) {
        console.log('there was a problem connecting to database: ' + err);
    }
});

console.log("DB Connected.")
var TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
var Team = mongoose.model('Team', TeamSchema);
var team = new Team({
    name: 'Product Development'
});
team.save((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data Inserted!")
    }
});

Team.find({
    name: /dev/i
}).exec((err, teams) => {
    if (err) {
        console.log(err);
    } else {
        console.log(teams);
    }
})

Team.deleteOne({
    name: 'Product Development'
}).exec(function(err) {
    if(err) {
        console.log(err);
    }
});