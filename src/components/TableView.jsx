import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from "./Header";
import Custumcard from "./Custumcard";
import Custompanel from './Custompanel';
const TableView = () => {
    const [data, setData] = useState([]);
    const [isSelectItem, setIsSelectItem] = useState([]);
    //const [showResult, setShowResult] = useState(false)
    
    
    const covidData = async() =>{
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();

        //console.log(actualData.statewise[1]);
        for(let i = 0; i< actualData.statewise.length; i++){
            data.push(actualData.statewise[i].state)
        }
        setData(actualData.statewise);
        //setData(data);
        console.log(data);
    }

    const useEffecte = useEffect(() => {
        covidData();
    }, []);

    const changeData = (e) => {   
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
                    {/* <div className="row">
                        <form>
                            <div className="row">
                                <div className="col-md-4 col-lg-3 col-xs-4">
                                    <div className="mb-3">                            
                                        <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." onChange={e => changeData(e)} />
                                        <datalist id="datalistOptions">
                                            {
                                                data.map((sData, index) => {
                                                    return(
                                                        <option value={sData.state} key={index} />                                                    
                                                    )
                                                })
                                            }
                                        </datalist>                                                                                                                    
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xs-4">
                                    <div className="mb-3">
                                        <select id="disabledSelect" className="form-select" onChange={e => changeData(e)}>
                                            <option value="" selected disabled>--Select--</option>
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
                    </div> */}

                    <div className="row">
                                    
                        {/* <h6 className="mb-2">Location : <span className="text-primary">{isSelectItem.state === "Total" ? "All Over India" : isSelectItem.state + " (" + isSelectItem.statecode + ")"}</span></h6>
                        <h6 className="mb-3 pull-right fs12">Last update : <span className="text-danger">{isSelectItem.lastupdatedtime}</span></h6>                             */}
                            <div className="panel-group">                        
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-md-1">Sr.No</div>
                                            <div className="col-md-3">State</div>
                                            <div className="col-md-2">Active Cases</div>
                                            <div className="col-md-2">Confirmed Cases</div>
                                            <div className="col-md-2">Deaths Cases</div>
                                            <div className="col-md-2">Recovered Cases</div>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        {
                                            data.map((sData, index) => {
                                                return(
                                                    <Custompanel 
                                                        stateIndex={index + 1}
                                                        stateName={sData.state === "Total" ? "All Over India" : sData.state + " (" + sData.statecode + ")"}
                                                        stateCode={sData.stateCode}
                                                        activeCase={sData.active}
                                                        confiCase={sData.confirmed}
                                                        deathCase={sData.deaths}
                                                        recoverCase={sData.recovered}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>                                    
                        </div>                   
                </section>
            </div>
        </>
    )
}

export default TableView;