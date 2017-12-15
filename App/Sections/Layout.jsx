import React from 'react';
import { Section, Tag, Notification, Message, Delete} from 'reactbulma'


export class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <section>

        <Section>
          <div>
            <Tag success>
              Hello World
              <Delete small/>
            </Tag>
          </div>
          <br/>

          <Notification danger>
            <Delete />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Notification>

          <Message info>
            <Message.Header>
              Info
              <Delete />
            </Message.Header>
            <Message.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </Message.Body>
          </Message>
        </Section>

      </section>
    )
  }
}

export default Layout
