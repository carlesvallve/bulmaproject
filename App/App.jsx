import React from 'react';
import { Section, Button, Field, Control, Input, Icon, Box, Notification, Media, Content, Level, Image } from 'reactbulma'


//export const App = () => {
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, activeTab: 1 }
  }

  render() {

    return (
      <div>

        {/* Tabs Example:  is-centered */}
        <Section>
          <div className="tabs">
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

        {/* Button Columns */}
        <Section>
          <div className="columns">
            <div className="column"><Button primary className="is-fullwidth">Primary</Button></div>
            <div className="column"><Button info className="is-fullwidth">Info</Button></div>
            <div className="column"><Button success className="is-fullwidth">Success</Button></div>
            <div className="column"><Button warning className="is-fullwidth">Warning</Button></div>
            <div className="column"><Button danger className="is-fullwidth">Danger</Button></div>
          </div>


        {/* Grouped buttons */}
        
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

export default App

// return (
//   <div className="app">
//     <div className="section">
//       <div className="container is-desktop">
//         <div className = "button is-danger">Hello World</div>
//       </div>
//     </div>
//
//     <div className="section">
//       <div className="container">
//         <h1 className="title">
//           Standard Elements
//         </h1>
//         <hr />
//         <div className="content">
//           <h1>Hello World</h1>
//           <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
//           <h2>Second level</h2>
//           <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
//           <ul>
//             <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
//             <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
//             <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
//             <li>Ut non enim metus.</li>
//           </ul>
//           <h3>Third level</h3>
//           <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
//           <ol>
//             <li>Donec blandit a lorem id convallis.</li>
//             <li>Cras gravida arcu at diam gravida gravida.</li>
//             <li>Integer in volutpat libero.</li>
//             <li>Donec a diam tellus.</li>
//             <li>Aenean nec tortor orci.</li>
//             <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
//             <li>Vivamus maximus ultricies pulvinar.</li>
//           </ol>
//           <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
//           <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
//           <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
//           <dl>
//             <dt>Web</dt>
//             <dd>The part of the Internet that contains websites and web pages</dd>
//             <dt>HTML</dt>
//             <dd>A markup language for creating web pages</dd>
//             <dt>CSS</dt>
//             <dd>A technology to make HTML look better</dd>
//           </dl>
//           <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
//           <h4>Fourth level</h4>
//           <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
//           <pre>
//         &lt;!DOCTYPE html&gt;
//         &lt;html&gt;
//           &lt;head&gt;
//             &lt;title&gt;Hello World&lt;/title&gt;
//           &lt;/head&gt;
//           &lt;body&gt;
//             &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.&lt;/p&gt;
//           &lt;/body&gt;
//         &lt;/html&gt;
//         </pre>
//           <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
//           <table>
//             <thead>
//               <tr>
//                 <th>One</th>
//                 <th>Two</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Three</td>
//                 <td>Four</td>
//               </tr>
//               <tr>
//                 <td>Five</td>
//                 <td>Six</td>
//               </tr>
//               <tr>
//                 <td>Seven</td>
//                 <td>Eight</td>
//               </tr>
//               <tr>
//                 <td>Nine</td>
//                 <td>Ten</td>
//               </tr>
//               <tr>
//                 <td>Eleven</td>
//                 <td>Twelve</td>
//               </tr>
//             </tbody>
//           </table>
//           <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
//           <h5>Fifth level</h5>
//           <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
//           <figure>
//             <img src="https://bulma.io/images/placeholders/256x256.png" />
//             <img src="https://bulma.io/images/placeholders/256x256.png" />
//             <figcaption>
//               Figure 1: Some beautiful placeholders
//             </figcaption>
//           </figure>
//           <h6>Sixth level</h6>
//           <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// )
