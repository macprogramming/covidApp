import react from 'react';

const Custompanel = (props) => {
    return(
        <>            
            <div className="row">
                <div className="col col-md-1">{props.stateIndex}</div>
                <div className="col col-md-3">{props.stateName}</div>
                <div className="col col-md-2">{props.activeCase}</div>
                <div className="col col-md-2">{props.confiCase}</div>
                <div className="col col-md-2">{props.deathCase}</div>
                <div className="col col-md-2">{props.recoverCase}</div>
            </div>
        </>
    )
}
export default Custompanel;