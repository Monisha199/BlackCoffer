const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight:String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: Date,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
})


const Market = mongoose.model('Market',marketSchema);
module.exports = Market;