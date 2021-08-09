import React from 'react';
import Header from "./Header";
import { useState } from 'react';
import { useEffect } from 'react';
//import { PieChart, Pie, Sector, Cell,Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,AreaChart,Area } from 'recharts';
import Custumcard from "./Custumcard";
import { Card } from '@material-ui/core';


const chartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 500 },
    { name: 'Group C', value: 500 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const PiechartPage = () => {

    const [data, setData] = useState([]);
    const [isSelectItem, setIsSelectItem] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [top5state, setTop5state] = useState([]);
    
    
    const covidData = async() =>{
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();

        //console.log(actualData.statewise);
        setData(actualData.statewise);
        setIsSelectItem(actualData.statewise[0]);        
        //setTop5state(actualData.statewise[]);        
    }

    const useEffecte = useEffect(() => {
        covidData();        
    }, []);

    const changeData = (e) => {        
        setShowResult(true)
        var resultData = data.filter( (currData) => {
            return currData.state == e.target.value
        })       
        //console.log(resultData);
        setIsSelectItem(resultData);
    }
    
    const top5date = (e) => {        
        let sortedActiveState = data.sort((a, b) => b.active - a.active).slice(1,6);
        let sortedConfiState = data.sort((a, b) => b.confirmed - a.confirmed).slice(1,6);
        let sortedDeathsState = data.sort((a, b) => b.deaths - a.deaths).slice(1,6);
        let sortedRecoveredState = data.sort((a, b) => b.recovered - a.recovered).slice(1,6);
        if(e.target.value == "Top 5 Active Cases State"){
            setTop5state(sortedActiveState)
        }else if(e.target.value == "Top 5 Confirmed Cases State"){
            setTop5state(sortedConfiState)
        }else if(e.target.value == "Top 5 Death Cases State"){
            setTop5state(sortedDeathsState)
        }else if(e.target.value == "Top 5 Recovered Cases State"){
            setTop5state(sortedRecoveredState)
        }else{
            console.log("null")
        }       
    }
    const DataFormater = (number) => {
        if(number > 1000000000){
          return (number/1000000000).toString() + 'B';
        }else if(number > 1000000){
          return (number/1000000).toString() + 'M';
        }else if(number > 1000){
          return (number/1000).toString() + 'K';
        }else{
          return number.toString();
        }
      }

    return (
        <>
             <div className="container">                 
                 <Header />
                 <section>
                    <div className="row">                        
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-3">
                            <Card className="card">
                                <div className="card-header border-bottom">
                                    <h5>State Data</h5>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="c0l-md-6 col-lg-6 col-xs-12">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">State</label>                                                                                       
                                                    <select id="disabledSelect" className="form-select" onChange={e => changeData(e)}>
                                                        <option disabled>--Select--</option>
                                                        {
                                                            data.map((sData, index) => {
                                                                return(
                                                                    <>                                                         
                                                                        <option value={sData.state}>{
                                                                    
                                                                            sData.state === "Total" ? "All Over India" : sData.state
                                                                    
                                                                        }</option>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </form>                                    
                                    
                                    <ResponsiveContainer width="100%" aspect={3}>
                                        <BarChart data={isSelectItem} width={600} height={300} className="cutomPiechart">                                            
                                            <XAxis dataKey="state" interval={'preserveStartEnd'} />
                                            <YAxis dataKey="active" />

                                            <Legend dataKey="Active" />
                                            <Legend dataKey="Confirmed" />
                                            <Legend dataKey="Deaths" />
                                            <Legend dataKey="Recovered" />

                                            <Tooltip />
                                            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />

                                            <Bar dataKey="active" fill="#0d6efd" barSize={50} />
                                            <Bar dataKey="confirmed" fill="#ffc107" barSize={50} />
                                            <Bar dataKey="deaths" fill="#fd1c3199" barSize={50} />
                                            <Bar dataKey="recovered" fill="#198754" barSize={50} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 mt-3">
                            <Card className="card">
                                <div className="card-header border-bottom">
                                    <h5>Top 5 State</h5>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6 col-xs-12">
                                                <div className="mb-3">
                                                    <label htmlFor="top5State" className="form-label">State</label>                                                                                       
                                                    <select id="top5State" className="form-select" onChange={e => top5date(e)}>
                                                        <option disabled selected>--Select--</option>
                                                        <option value="Top 5 Active Cases State">Top 5 Active Cases State</option>                                                        
                                                        <option value="Top 5 Confirmed Cases State">Top 5 Confirmed Cases State</option>                                                        
                                                        <option value="Top 5 Death Cases State">Top 5 Active Death State</option>                                                        
                                                        <option value="Top 5 Recovered Cases State">Top 5 Recovered Cases State</option>                                                        
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </form>                                    
                                    
                                    <ResponsiveContainer width="100%" aspect={3}>
                                        <BarChart data={top5state} width={600} height={300}>                                            
                                            <XAxis dataKey="state" interval={'preserveStartEnd'} />
                                            {/* <YAxis dataKey="active" /> */}
                                            {/* <YAxis type="number" dataKey="active" domain={[0, 20000]}/> */}
                                            <YAxis tickFormatter={DataFormater}/>

                                            <Legend dataKey="Active" />
                                            <Legend dataKey="Confirmed" />
                                            <Legend dataKey="Deaths" />
                                            <Legend dataKey="Recovered" />

                                            <Tooltip />
                                            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />

                                            <Bar dataKey="active" fill="#0d6efd" barSize={20} />
                                            <Bar dataKey="confirmed" fill="#ffc107" barSize={20} />
                                            <Bar dataKey="deaths" fill="#fd1c3199" barSize={20} />
                                            <Bar dataKey="recovered" fill="#198754" barSize={20} />
                                        </BarChart>
                                        
                                    </ResponsiveContainer>
                                </div>
                            </Card>
                        </div>
                    </div>
                 </section>
             </div>
         </>    
    );
}

export default PiechartPage;