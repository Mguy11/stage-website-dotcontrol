import React, { Component } from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import '../styles/components/_introduction.scss';

class Introduction extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <div className="introduction">
            <p>Test</p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Introduction;
