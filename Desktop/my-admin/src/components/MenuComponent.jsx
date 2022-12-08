import React, { Component } from "react";
class MenuComponent extends Component {
  render() {
    return (
      <nav
        className="drawer accordion drawer-light bg-white"
        id="drawerAccordion"
      >
        <div className="drawer-menu">
          <div className="nav">
            <div className="drawer-menu-heading d-sm-none">Account</div>

            <a className="nav-link d-sm-none" href="#!">
              <div className="nav-link-icon">
                <i className="material-icons">notifications</i>
              </div>
              Notifications
            </a>

            <div className="skill-box">
              <span className="title">HTML/CSS</span>
              <div className="skill-bar">
                <span className="skill-per html">
                  <span className="tooltip">95%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">SASS</span>
              <div className="skill-bar">
                <span className="skill-per sass">
                  <span className="tooltip">80%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">JavaScript</span>
              <div className="skill-bar">
                <span className="skill-per javascript">
                  <span className="tooltip">60%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">c#</span>
              <div className="skill-bar">
                <span className="skill-per c#">
                  <span className="tooltip">40%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">mac os</span>
              <div className="skill-bar">
                <span className="skill-per reactjs">
                  <span className="tooltip">70%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">ReactJS</span>
              <div className="skill-bar">
                <span className="skill-per reactjs">
                  <span className="tooltip">70%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">vue JS</span>
              <div className="skill-bar">
                <span className="skill-per vue js">
                  <span className="tooltip">75%</span>
                </span>
              </div>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">git</span>
            <div className="skill-bar">
              <span className="skill-per html">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">type scripe</span>
            <div className="skill-bar">
              <span className="skill-per sass">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">svelte</span>
            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">60%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">docker</span>
            <div className="skill-bar">
              <span className="skill-per c#">
                <span className="tooltip">40%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">linux</span>
            <div className="skill-bar">
              <span className="skill-per reactjs">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">seo prenuim</span>
            <div className="skill-bar">
              <span className="skill-per reactjs">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Angular</span>
            <div className="skill-bar">
              <span className="skill-per vue js">
                <span className="tooltip">75%</span>
              </span>
            </div>
          </div>
        </div>

        <div className="drawer-footer border-top">
          <div className="d-flex align-items-center">
            <i className="material-icons text-muted">account_circle</i>
            <div className="ms-3">
              <div className="caption">Logged par:</div>
              <div className="small fw-500">Capucine TRICOIT</div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default MenuComponent;
