import React from "react";
import House from '../house/index';

const FeaturedHouse = (props) => {
    //if  prps contain a house then render the banner and House component
    if (props.house) return (
        <div>
            <div className="row featuredHouse">
                <h3 className="col-md-12 text-center">FeaturedHouse</h3>
            </div>
            <House house={props.house} />
        </div>
    )
    return (<div>No featured house at this time!!</div>);
}

export default FeaturedHouse;