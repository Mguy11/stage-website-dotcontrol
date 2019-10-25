import React, { Component } from 'react';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import '../styles/components/_sidebar.scss';

import Introduction from './introduction';
import Betrokken from './betrokken';
import Onderzoeken from './onderzoeken';

export default class Sidebar extends Component {
  componentWillMount() {
    this.setState({
      isMenuOpened: false
    });
  }
  render() {
    return (
      <OffCanvas
      width={450}
      transitionDuration={300}
      effect={"parallax"}
      isMenuOpened={this.state.isMenuOpened}
      position={"left"}
      >
        <OffCanvasBody
        className={"sidebar"}
        style={{ fontSize: "3rem"}}
        >
          <Row>
            <Col span={12}>
              <p>
                <a href="#" onClick={this.handleClick.bind(this)}>
                  Menu
                </a>{" "}
              </p>
              <Introduction/>
              <Betrokken/>
              <Onderzoeken/>
            </Col>
          </Row>
        </OffCanvasBody>
        <OffCanvasMenu className={"sidebar__menu"}>
          <Row>
            <Col span={12}>
              <div className="sidebar__toggle">
                <a className="sidebar__toggle-button" href="#" onClick={this.handleClick.bind(this)}>
                </a>
              </div>
            </Col>
          </Row>

          <div className="sidebar__menu-content">
            <Row>
              <Col span={10} offset={1}>
                <div className="sidebar__image-wrapper">
                  <a className="sidebar__image"></a>
                </div>
              </Col>
              <Col span={10} offset={1}>
                <div className="sidebar__introduction-content">
                  <span className="sidebar__introduction-item sidebar__introduction-item--name">Martijn Bankert</span>
                  <span className="sidebar__introduction-item sidebar__introduction-item--function">Stagair Front-end Development</span>
                  <span className="sidebar__introduction-item sidebar__introduction-item--company">DotControl</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={6} offset={1}>
                <div className="sidebar__links">      
                    <a href="#" className="sidebar__link-item">
                      <span className="sidebar__link-content">Betrokken</span>
                    </a>
                    <a href="#" className="sidebar__link-item">
                      <span className="sidebar__link-content">Onderzoeken</span>
                    </a>
                    <a href="#" className="sidebar__link-item">
                      <span className="sidebar__link-content">Ondernemen</span>
                    </a>
                    <a href="#" className="sidebar__link-item">
                      <span className="sidebar__link-content">Ontwerpen</span>
                    </a>
                    <a href="#" className="sidebar__link-item">
                      <span className="sidebar__link-content">Ontwikkelen</span>
                    </a>
                </div>
              </Col>
            </Row>
          </div>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }

  handleClick() {
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

}
