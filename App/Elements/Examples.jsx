import React from 'react';
import { Section, Button, Field, Control, Input, Icon, Box, Notification, Media, Content, Level, Image, Container, Delete, Tag } from 'reactbulma'


export class Examples extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      activeTab: 1,
    }
  }


  componentDidMount() {

  }


  render() {
    return (
      <div>

        <Section>
          <Container>
            <Notification>
              This container is <strong>centered</strong> on desktop, thanks to it's parent Container element.
              <Delete />
            </Notification>
          </Container>
          <br/>

            <Notification primary>
              Primar lorem ipsum dolor sit amet, consectetur
              adipiscing elit lorem ipsum dolor sit amet,
              consectetur adipiscing elit
              <Delete />
            </Notification>

          <br/>
          <div>
            <Tag success>
              Hello World
              <Delete small/>
            </Tag>
          </div>
        </Section>

        {/* Button Columns */}
        <Section>
          <div className="columns">
            <div className="column"><Button primary className="is-fullwidth">Primary</Button></div>
            <div className="column"><Button info className="is-fullwidth">Info</Button></div>
            <div className="column"><Button success className="is-fullwidth">Success</Button></div>
            <div className="column"><Button warning className="is-fullwidth">Warning</Button></div>
            <div className="column"><Button danger className="is-fullwidth">Danger</Button></div>
          </div>
        </Section>


        {/* Grouped buttons */}
        <Section>
          <Field grouped>
            <Control>
              <Button primary>
                Save changes
              </Button>
            </Control>
            <Control>
              <Button>
                Cancel
              </Button>
            </Control>
            <Control>
              <Button danger>
                Delete post
              </Button>
            </Control>
          </Field>
        </Section>



        {/* Box Example */}
        <Section>
          <Box>
            <Media>
              <Media.Left>
                <Image is='64x64' src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/>
              </Media.Left>
              <Media.Content>
                <Content>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </Content>
                <Level mobile>
                  <Level.Left>
                    <Level.Item>
                      <Icon small><i className="fa fa-reply"/></Icon>
                    </Level.Item>
                    <Level.Item>
                      <Icon small><i className="fa fa-retweet"/></Icon>
                    </Level.Item>
                    <Level.Item>
                      <Icon small><i className="fa fa-heart"/></Icon>
                    </Level.Item>
                  </Level.Left>
                </Level>
              </Media.Content>
            </Media>
          </Box>
        </Section>

        {/* Tabs Example:  is-centered */}
        <Section>
          <div className="tabs is-small is-right">
            <ul>
              <li className={this.state.activeTab == 1 ? "is-active" : ""}  onClick={(e) => { this.setState({ activeTab: 1 })}}>
                <a>
                  <span className="icon is-small"><i className="fa fa-image"></i></span>
                  <span>Pictures</span>
                </a>
              </li>
              <li className={this.state.activeTab == 2 ? "is-active" : ""}  onClick={(e) => { this.setState({ activeTab: 2 })}}>
                <a>
                  <span className="icon is-small"><i className="fa fa-music"></i></span>
                  <span>Music</span>
                </a>
              </li>
              <li className={this.state.activeTab == 3 ? "is-active" : ""}  onClick={(e) => { this.setState({ activeTab: 3 })}}>
                <a>
                  <span className="icon is-small"><i className="fa fa-film"></i></span>
                  <span>Videos</span>
                </a>
              </li>
              <li className={this.state.activeTab == 4 ? "is-active" : ""}  onClick={(e) => { this.setState({ activeTab: 4 })}}>
                <a>
                  <span className="icon is-small"><i className="fa fa-file-text-o"></i></span>
                  <span>Documents</span>
                </a>
              </li>
            </ul>
          </div>
        </Section>

        {/* Input field with icon and loading button */}
        <Section>
          <Field hasAddons>
            <Control hasIconsLeft>
              <Input placeholder="Text input"/>
              <Icon left>
                <i className="fa fa-home"/>
              </Icon>
            </Control>

            <Control>
              <Button info loading={this.state.loading}
                onClick={(e) => {
                  this.setState({ loading: true })
                  window.setTimeout(() => {
                    this.setState({ loading: false })
                  }, 1000)
                }}
              >
                Search
              </Button>
            </Control>
          </Field>
        </Section>

        {/* Tile layout */}
        <Section>
          <div className="tile is-ancestor">

            <div className="tile is-vertical is-8">
              <div className="tile">

                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification is-primary">
                    <p className="title">Vertical...</p>
                    <p className="subtitle">Top tile</p>
                  </article>
                  <article className="tile is-child notification is-warning">
                    <p className="title">...tiles</p>
                    <p className="subtitle">Bottom tile</p>
                  </article>
                </div>

                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <p className="title">Middle tile</p>
                    <p className="subtitle">With an image</p>
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/640x480.png" />
                    </figure>
                  </article>
                </div>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="title">Wide tile</p>
                  <p className="subtitle">Aligned with the right tile</p>
                  <div className="content">
                    {/* Content */}
                  </div>
                </article>
              </div>
            </div>

            <div className="tile is-parent">
              <article className="tile is-child notification is-success">
                <div className="content">
                  <p className="title">Tall tile</p>
                  <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. </p>
                  <div className="content">
                    {/* Content */}
                  </div>
                </div>
              </article>
            </div>

          </div>
        </Section>

      </div>
    )
  }
}

export default Examples
