const mongoose = require('mongoose');

const personneSchema = new mongoose.Schema({
    nom : {
        type : String,
        required : true
    },
    prenom : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
} , {timestamps : true })

const Personne = mongoose.model('Personne' , personneSchema);

module.exports = Personne;
