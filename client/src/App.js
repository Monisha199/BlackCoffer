import React  from "react";
import BarChart from './components/BarChart';
import Bar from './components/Bar';



class App extends React.Component {
  constructor(props){
    super(props); // calls the constructor of Component class
    this.state={ // state is an object that contains local data of our component, it is a plain js object
      apiResponse :"" ,
      marketData : [],
      showBarchart :false    
    }
  }

  callAPI(){
    // console.log("this.state",this.state);
    // fetch("http://127.0.0.1:8000/").then(res => res.text()).then((res) => {console.log("text",res);this.setState({apiResponse:res})}).catch(err =>err);
    
      fetch("http://127.0.0.1:8000/").then(res => res.json())
      .then((res) => {
        // console.log("text",res);
        this.setState({marketData:res});
        this.setState({showBarchart:true});
        // console.log("data :",this.state.marketData);
      });

  }
  componentDidMount(){
    this.callAPI();
  }




render(){
    let {marketData,showBarchart} = this.state;
    // marketData= marketData[0]
    console.log("marketData",marketData,showBarchart);
    let showBarGraph;
    if(showBarchart){
      console.log("this.state.showBarchart is now set to true",this.state.showBarchart)
      showBarGraph = <BarChart marketData={marketData} width={700} height={300}/>
    }
    else{
      showBarGraph =<></>
    }
    return (
      <div className="App">
        {showBarGraph}
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;


