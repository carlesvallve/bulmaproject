import React from 'react';
import { Section, Button, Field, Control, Input, Icon, Box, Notification, Media, Content, Level, Image } from 'reactbulma'


export class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <section>


        <Section>
          <div className="columns is-vcentered">
            <div className="label-color">R18 Blue</div>
            <div className="box-color r18-blue">#388BE2</div>
            <div className="box-color r18-blue-dark">#2669AE</div>
            <div className="box-color r18-blue-light">#78ACEA</div>
            <div className="box-color r18-blue-bg">#DBE9F9</div>
          </div>
        </Section>

        <Section>
          <div className="columns is-vcentered">
            <div className="label-color">R18 Red</div>
            <div className="box-color r18-red">#EF1C48</div>
            <div className="box-color r18-red-dark">#A9043A</div>
            <div className="box-color r18-red-light">#F3607E</div>
            <div className="box-color r18-red-bg">#FFF0F3</div>
          </div>
        </Section>

        <Section>
          <div className="columns is-vcentered">
            <div className="label-color">R18 Other</div>
            <div className="box-color r18-green">#16B483</div>
          </div>
        </Section>

        <Section>
          <div className="columns is-vcentered">
            <div className="label-color">R18 Grey</div>
            <div className="box-color r18-black">#000</div>
            <div className="box-color r18-grey-dark">#262626</div>
            <div className="box-color r18-grey">#626262</div>
            <div className="box-color r18-grey-light">#B2B2B2</div>
            <div className="box-color r18-smoke">#E8E8E8</div>
            <div className="box-color r18-smoke-bg">#F0F0F0</div>
          </div>
        </Section>

      </section>
    )
  }
}

export default Colors

// <div className="columns is-vcentered" style={{ background: 'yellow' }}>
//   <div className="column"><div className="title">R18 Red</div></div>
//   <div className="column"><div className="box-color r18-blue"></div></div>
//   <div className="column"><div className="box-color r18-blue-dark"></div></div>
//   <div className="column"><div className="box-color r18-blue-light"></div></div>
//   <div className="column"><div className="box-color r18-blue-bg"></div></div>
// </div>
