import React from "react";
import './Header.css';
import IconSearch from '../Icon/search';


const Header = () => {
    return (
        <div className="Frame1">
            <div className="Headers">Place holder</div>
            <div className="FindWhereToGo">Find where to go</div>
            <div className="Rectangle1"><IconSearch/> <input className="Search" placeholder="Type to search ..."></input> </div>
        </div>
    );
}

export default Header;
