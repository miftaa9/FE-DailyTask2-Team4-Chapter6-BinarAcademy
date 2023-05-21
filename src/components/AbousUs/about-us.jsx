import React, { Component } from 'react'
import Card from "./about-us-ui";
import image4 from "./image4.png";

class Cards extends Component {
    render (){
        return(
            <div>
                <br/>
                <img className="img-left" src = {image4}/>
                <br/>
                <h1 className="padding-top">About Us</h1>
                <hr className = "shorten-hr"/>
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <Card title = "Hudaaaaaaaaaa" p = "Web Development"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "Rafliiiiiiiiiiii" p = "Marketing"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "Endangggggggggg" p = "Public Relations"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "Yanaaaaaaaaa" p = "Public Relations"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "Miftaaaaaaaaaa" p = "Web Development"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "Rizaaaaaaaaaa" p = "Web Development"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;