import React from 'react';
import { Section, Box, Media, Content, Level, Image, Icon } from 'reactbulma'


export class Animation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      animationClass: ''
    }
  }


  setRandomAnimation(state) {
    const anim =[
      "bounce", "flash", "pulse", "rubberBand", "shake", "headShake", "swing", "tada", "wobble", "jello", "flip"
    ]

    const animIn = [
      "jackInTheBox",
      "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp",
      "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig",
      "flipInX", "flipInY",
      "lightSpeedIn",
      "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight",
      "rollIn",
      "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp",
      "slideInDown", "slideInLeft", "slideInRight", "slideInUp",
    ]

    const animOut = [
      "hinge",
      "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp",
      "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig",
      "flipOutX", "flipOutY",
      "lightSpeedOut",
      "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight",
      "rollOut",
      "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp",
      "slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp"
    ]

    let animationItems = anim;
    if (state == 0) { animationItems = animIn }
    if (state == 1) { animationItems = anim }
    if (state == 2) { animationItems = animOut }

    const item = animationItems[Math.floor(Math.random() * animationItems.length)];
    const animationClass = "animated " + item
    console.log(animationClass)

    this.setState({
      activeTab: state,
      animationClass: animationClass
    })
  }


  render() {

    const { activeTab } = this.state

    return (
      <section>

        <Section>

          <Section>
            <Box className={this.state.animationClass}>
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

          <Section>

            <div className="tabs is-centered">
              <ul>
                <li className={activeTab == 0 ? "is-active" : ""}  onClick={(e) => { this.setRandomAnimation(0) }}>
                  <a>
                    <span>In</span>
                  </a>
                </li>
                <li className={activeTab == 1 ? "is-active" : ""}  onClick={(e) => { this.setRandomAnimation(1) }}>
                  <a>
                    <span>Animate</span>
                  </a>
                </li>
                <li className={activeTab == 2 ? "is-active" : ""}  onClick={(e) => { this.setRandomAnimation(2) }}>
                  <a>
                    <span>Out</span>
                  </a>
                </li>
              </ul>
            </div>

          </Section>

        </Section>

      </section>
    )
  }
}

export default Animation
