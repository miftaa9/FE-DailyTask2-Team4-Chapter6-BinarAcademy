import React from 'react';

import "./about-us.css";
const Card = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src = {props.imgsrc} className = "card-img-top"/>
            </div>
        
        
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.p}
                </p>
                {/* <a href = "#" className = "btn btn-outline-success">Go anywhere</a> */}
            </div>
        </div>
    );
}

export default Card;