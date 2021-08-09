import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from "./Header";
import Custumcard from "./Custumcard";
const Dashboard = () => {
    const [data, setData] = useState([]);
    const [isSelectItem, setIsSelectItem] = useState([]);
    const [showResult, setShowResult] = useState(false)
    
    
    const covidData = async() =>{
        setShowResult(true)
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();

        console.log(actualData.statewise[1]);
        setData(actualData.statewise);
        setIsSelectItem(actualData.statewise[0]);
    }

    const useEffecte = useEffect(() => {
        covidData();
    }, []);

    const changeData = (e) => {        
        setShowResult(true)
        var resultData = data.filter( (currData) => {
            return currData.state == e.target.value
        })
        setIsSelectItem(resultData[0]);
    }

    return(
        <>
            <div className="container">                
                <Header />
                <section>
                    <div className="row">
                        <div className="mt-3">
                            <form>
                                <div className="row">
                                    <div className="col-md-4 col-lg-3 col-xs-4">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">State</label>                                                                                       
                                            <select id="disabledSelect" className="form-select" onChange={e => changeData(e)}>
                                                <option disabled>--Select--</option>
                                                {
                                                    data.map((sData, index) => {
                                                        return(
                                                            <>                                                         
                                                                <option value={sData.state} key={index}>{
                                                                    
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
                        </div>
                    </div>
                    {showResult ? 
                    <div className="row">
                                    
                        <h6 className="mb-2">Location : <span className="text-primary">{isSelectItem.state === "Total" ? "All Over India" : isSelectItem.state + " (" + isSelectItem.statecode + ")"}</span></h6>
                        <h6 className="mb-3 pull-right fs12">Last update : <span className="text-danger">{isSelectItem.lastupdatedtime}</span></h6>
                            <Custumcard   
                                bgclass="bg-primary"                             
                                title="Active Cases"
                                value={isSelectItem.active}
                                txtclass="text-primary"
                            />
                            <Custumcard       
                                bgclass="bg-warning"                         
                                title="Confirmed Cases"
                                value={isSelectItem.confirmed}
                                txtclass="text-warning"
                            />
                            <Custumcard                          
                                bgclass="bg-danger"      
                                title="Deaths Cases"
                                value={isSelectItem.deaths}
                                txtclass="text-danger"
                            />
                            <Custumcard                  
                                bgclass="bg-success"              
                                title="Recovered Cases"
                                value={isSelectItem.recovered}
                                txtclass="text-success"
                            />
                        </div>: null
                    }
                </section>
            </div>
        </>
    )
}

export default Dashboard;