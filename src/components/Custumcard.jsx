import React from 'react';
import Card from '@material-ui/core/Card';
import { PinDropSharp } from '@material-ui/icons';
const Custumcard = (props) => {
    return(
        <>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Card className={"card mb-2 " + props.bgclass}>
                    <div className={"card-header " + props.txtclass}>
                        <div>{props.title}</div>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <h4 className="card-text text-white"><span>{props.value}</span></h4>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Custumcard;