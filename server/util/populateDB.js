const mongoose = require('mongoose');

const Market = require('../models/market');
const data = require('../static/industries');


async function populateMarket(){
    await data.map((item,index)=>{
        // console.log(item.pestle,index)
        Market.create(item);
    });
    // let data = await Market.find({});
    // console.log("data from json file",data[0]);
    // console.log("market data",data);
}

module.exports = populateMarket();