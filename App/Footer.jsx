import React from 'react';

import { Section, Button, Field, Control, Input, Icon, Box, Notification, Media, Content, Level, Image } from 'reactbulma'

export class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>R18 Design Guide</strong> by <a href="http://jgthms.com">Carles Vallve</a>.
            </p>
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer
