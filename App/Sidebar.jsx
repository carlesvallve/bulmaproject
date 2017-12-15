import React from 'react';
import { Section, Button, Field, Control, Input, Icon, Box, Notification, Media, Content, Level, Image } from 'reactbulma'


export class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeItem: null, searchString: '' }
  }

  createMenuItems(searchString) {
    searchString = searchString.toLowerCase()

    const { items, icon } = this.props.data

    if (!items) {
      return null
    }

    let result = items
    if (searchString !== '') {
      result = items.filter(elem =>
        elem.name.toLowerCase().includes(searchString)
      )
    }

    return result.map((e, index) => {
      return (
        <li key={index}>
          <a href="#"
            className={this.state.activeItem == index ? "is-active" : ""}
            onClick={(e) => {
              this.setState({ activeItem: index })
              this.props.handler(index)
            }}
          >
            <span className="icon is-small">
              <i className={'fa ' + icon}></i></span> {e.name}
          </a>
        </li>
      )
    })
  }

  render() {

    const { title } = this.props.data

    return (
      <nav role="navigation" className="sidebar is-hidden-touch">

        <Field>
         <Control hasIconsLeft>
           <Input placeholder="Filter" onChange={
             (e) => { this.setState({ searchString: e.target.value }) }
           } />
           <Icon left>
             <i className="fa fa-search"/>
           </Icon>
         </Control>
        </Field>

        <ul className="menu-list">
          <li>
            <a href="#" className="is-active">
              <span className="icon"><i className="fa fa-bookmark"></i></span>
              <strong>{title || 'NO TITLE'}</strong>
            </a>

            <ul>{this.createMenuItems(this.state.searchString)}</ul>

          </li>
        </ul>
      </nav>
    )
  }
}

export default Sidebar

// <p className="menu-label is-hidden-touch">NAVIGATION</p>
