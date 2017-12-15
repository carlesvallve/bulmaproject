import React from 'react';
//import { Section, Button, Field, Control, Input, Icon, Box, Notification, Media, Content, Level, Image } from 'reactbulma'


export class Header extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { data, activeTab, handler } = this.props

    return (
      <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">

        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            <img src="assets/img/logo-dmm-01.png" alt="R18 Design guide" width="84" height="36" />
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">

            <div className="tabs">
              <ul>
                <li className={activeTab == 0 ? "is-active" : ""}  onClick={(e) => { handler(0) }}>
                  <a>
                    <span className="icon is-small"><i className="fa fa-paint-brush"></i></span>
                    <span>{data.colors.title}</span>
                  </a>
                </li>
                <li className={activeTab == 1 ? "is-active" : ""}  onClick={(e) => { handler(1) }}>
                  <a>
                    <span className="icon is-small"><i className="fa fa-font"></i></span>
                    <span>{data.typography.title}</span>
                  </a>
                </li>
                <li className={activeTab == 2 ? "is-active" : ""}  onClick={(e) => { handler(2) }}>
                  <a>
                    <span className="icon is-small"><i className="fa fa-columns"></i></span>
                    <span>{data.layout.title}</span>
                  </a>
                </li>
                <li className={activeTab == 3 ? "is-active" : ""}  onClick={(e) => { handler(3) }}>
                  <a>
                    <span className="icon is-small"><i className="fa fa-cube"></i></span>
                    <span>{data.elements.title}</span>
                  </a>
                </li>
                <li className={activeTab == 4 ? "is-active" : ""}  onClick={(e) => { handler(4) }}>
                  <a>
                    <span className="icon is-small"><i className="fa fa-cubes"></i></span>
                    <span>{data.components.title}</span>
                  </a>
                </li>
                <li className={activeTab == 5 ? "is-active" : ""}  onClick={(e) => { handler(5) }}>
                  <a>
                    <span className="icon is-small"><i className="fa  fa-play-circle"></i></span>
                    <span>{data.animation.title}</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </nav>
    )
  }

}

export default Header
