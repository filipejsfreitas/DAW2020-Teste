const mongoose = require('mongoose');

const batismoSchema = new mongoose.Schema({
    date: String,
    title: String,
    pai: String,
    mae: String,
    batisado: String,
    ref: String,
    href: String,
    _id: String
});

module.exports = mongoose.model('batismo', batismoSchema);
