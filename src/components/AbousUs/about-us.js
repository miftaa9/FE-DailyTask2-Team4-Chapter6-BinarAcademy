import React, { Component } from "react";
import Card from "./about-us-ui";
import image4 from "./image4.png";

class Cards extends Component {
  render() {
    return (
      <div>
        <img className="img-center" src={image4} />
        <div  id="about-us">
          <h1 className="padding-top" style={{ marginRight: "270px" }}>
            About Us
          </h1>
          <hr className="shorten-hr" />
          <div className="row" style={{ marginLeft: "120px" }}>
            <div className="col-md-4">
              <Card title="M. Huda Nugroho" p="Back End Web Developer" />
            </div>
            <div className="col-md-4">
              <Card title="Rafli Mardhian" p="Back End Web Developer" />
            </div>
            <div className="col-md-4">
              <Card title="Endang Hendayatna" p="Front End Web Developer" />
            </div>
            <div className="col-md-4">
              <Card title="Yana Wahyu Indra Pramugari" p="Back End Web Developer" />
            </div>
            <div className="col-md-4">
              <Card title="Miftakhul Ulum Khasanah" p="Front End Web Developer" />
            </div>
            <div className="col-md-4">
              <Card title="Rizatul Mas'ulah" p="Front End Web Developer" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
