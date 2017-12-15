import React from 'react';
import Examples from '../Elements/Examples'
import { Section, Button, Field, Control, Input, Icon, Box, Notification, Media, Content, Image, Container, Delete, Tag } from 'reactbulma'


export class Components extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Examples />
      </section>
    )
  }

}

export default Components
