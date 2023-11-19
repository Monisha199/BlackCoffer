const Market = require('../models/market');

module.exports.home = async function(req,res){
    let data = await Market.find({});
    // console.log("hello",data);
    return res.send(data);
}

