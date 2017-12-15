import React from 'react';
import { Section, Button, Field, Control, Input, Icon, Box, Notification, Media, Content, Image, Container, Delete, Tag } from 'reactbulma'


export class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {

  }

  render() {
    return (
      <Section>
        <h1 className="title">Buttons</h1>

        <Box><Button primary className="is-fullwidth">Primary</Button></Box>
        <Box><Button info className="is-fullwidth">Info</Button></Box>
        <Box><Button success className="is-fullwidth">Success</Button></Box>
        <Box><Button warning className="is-fullwidth">Warning</Button></Box>
        <Box><Button danger className="is-fullwidth">Danger</Button></Box>

      </Section>
    )
  }

}

export default Buttons
