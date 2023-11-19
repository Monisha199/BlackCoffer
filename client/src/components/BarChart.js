import React from "react";

import * as d3 from "d3";
import Bar from './Bar';
import PieChart from "./PieChart";
import "../styles/barchart.css";



class BarChart extends React.Component{
    constructor(props){
        super(props);
        this.dicts={
            dict_topics:{},
            dict_sector:{},
            dict_region:{},
            dict_pestle:{},
            dict_source:{},
            dict_country:{}
        }
        this.state={loadBar:false}
        this.dataList= [
            {
                country: 'India',
                value: 273
            },
            {
                country: 'USA',
                value: 2420
            },
            {
                country: 'China',
                value: 1270
            },
            {
                country: 'UK',
                value: 553
            },
            {
                country: 'Germany',
                value: 731
            },
            {
                country: 'Sweden',
                value: 136
            },
            {
                country: 'France',
                value: 682
            },
            {
                country: 'Australia',
                value: 239
            },
            {
                country: 'Canada',
                value: 367
            },
            {
                country: 'Brazil',
                value: 442
            }
        ];
           
        
        this.populateDicts= function(fetched_data,param,dict_name){
            fetched_data.map((item,index)=>{
                if (item[param] in dict_name){
                    dict_name[item[param]] +=1
                }else{
                    dict_name[item[param]] =1
                }
                return 0;
            })
            console.log(dict_name)
            
        }
    }

    componentDidMount(){
        this.drawChart();
    }

    drawChart(){
        const data = this.props.marketData;
        console.log("data in drawchart ",data);

        this.populateDicts(data,"topic",this.dicts.dict_topics);
        this.populateDicts(data,"sector",this.dicts.dict_sector);
        this.populateDicts(data,"region",this.dicts.dict_region);
        this.populateDicts(data,"pestle",this.dicts.dict_pestle);
        this.populateDicts(data,"source",this.dicts.dict_source);
        this.populateDicts(data,"country",this.dicts.dict_country);

        this.createData(this.dicts.dict_topics,"dict_topics");
        this.createData(this.dicts.dict_sector,"dict_sector");
        this.createData(this.dicts.dict_region,"dict_region");
        this.createData(this.dicts.dict_pestle,"dict_pestle");
        this.createData(this.dicts.dict_source,"dict_source");
        this.createData(this.dicts.dict_country,"dict_country");
       

        // const svg = d3.select("body").append("svg").attr("width",this.props.width).attr("height",this.props.height);
        // svg.selectAll("rect")
        //     .data(data)
        //     .join("rect")
        //     .attr("x", (d, i) => i * 70)
        //     .attr("y", (d, i) => 300 - 10 * d)
        //     .attr("width", 65)
        //     .attr("height", (d, i) => d * 10)
        //     .attr("fill", "green");
        // return;
    }

    createData(dictionary,name){
        let arr=[]
        
        for (const [key, value] of Object.entries(dictionary)) {
            let obj ={country:"",value:0}
            obj.country=key
            obj.value=value
            arr.push(obj)
          }
        console.log(arr,"arr");

        this.dicts[name]=[...arr];
        console.log(this.dicts[name],name);
        if(name==="dict_country"){
            this.setState({loadBar:true});
        }
        
    }

    render(){
        // return <div id={"#" + this.props.id}></div>'
        console.log("this.dicts.dict_topics",this.dicts.dict_topics)
        let showBar=<></>
        if(this.state.loadBar){
            showBar=<div>
                    <Bar data={this.dicts.dict_pestle} name="Pestle"/>
                    <Bar data={this.dicts.dict_sector} name="Sector"/>
                    <Bar data={this.dicts.dict_region} name="Region"/>
                    <Bar data={this.dicts.dict_source} name="Source"/>
                    <Bar data={this.dicts.dict_country} name="Country"/>
                    <Bar data={this.dicts.dict_topics} name="Topics" />
            </div> 
        }
        return (
            <div>
                {showBar}
            </div>
        )
    }

}

export default BarChart;

