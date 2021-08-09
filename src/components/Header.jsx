import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <>
            <header className="d-flex justify-content-center py-3 bg-light">
                <h2 className="text-warning">Covid-19 Dashboard</h2>
            </header>
            <header className="d-flex flex-wrap justify-content-end py-3 mb-4 bg-white">
                <ul className="nav nav-pills">
                    <NavLink exact to="/" className="nav-link">Dashboard</NavLink>
                    <NavLink to="/tableView" className="nav-link">Table View</NavLink>
                    <NavLink to="/pieChart" className="nav-link">Piechart</NavLink>                        
                </ul>
            </header>
        </>
    )
}
export default Header;