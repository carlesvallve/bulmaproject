import React from 'react';

export class Elements extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        {this.props.component}
      </section>
    )
  }

}

export default Elements
