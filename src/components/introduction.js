import React, { Component } from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import '../styles/components/_introduction.scss';

class Introduction extends Component {
  render() {
    return (
      <Row>
        <Col span={6}>
          <div className="introduction_image-wrapper">
            <img className="introduction__image" src="../assets/images/tech.jpg" alt="Tech">
            </img>
          </div>
        </Col>
        <Col span={6}>
          <div className="introduction">
            <p style={{margin: "0"}}>Introduction</p>
          </div>
        </Col>
        <Col span={6}>
          <div className="introduction">
            <p style={{margin: "0"}}>Introduction</p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Introduction;
