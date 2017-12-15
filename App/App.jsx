import React from 'react';

import data from './Data'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

import Colors       from './Sections/Colors'
import Typography   from './Sections/Typography'
import Layout       from './Sections/Layout'
import Elements     from './Sections/Elements'
import Components   from './Sections/Components'
import Animation    from './Sections/Animation'

import Buttons from './Sections/Elements/Buttons'


//export const App = () => {
export class App extends React.Component {

  constructor(props) {
    super(props);

    this.setSectionData = this.setSectionData.bind(this)
    this.handleSidebar = this.handleSidebar.bind(this)

    this.state = {
      sectionData: data.colors,
      currentComponent: null
    }
  }

  setSectionData(num) {
    let sectionData = null;
    switch(num) {
      case 0: sectionData = data.colors; break;
      case 1: sectionData = data.typography; break;
      case 2: sectionData = data.layout; break;
      case 3: sectionData = data.elements; break;
      case 4: sectionData = data.components; break;
      case 5: sectionData = data.animation; break;
    }

    this.setState({ sectionData })
  }

  handleSidebar(num) {
    const item = this.state.sectionData.items[num]
    this.setState({ currentComponent: item.component })
  }

  getSectionContent(num) {
    switch(num) {
      case 0: return <Colors      component={this.state.currentComponent} />
      case 1: return <Typography  component={this.state.currentComponent} />
      case 2: return <Layout      component={this.state.currentComponent} />
      case 3: return <Elements    component={this.state.currentComponent} />
      case 4: return <Components  component={this.state.currentComponent} />
      case 5: return <Animation   component={this.state.currentComponent} />
    }
    return null
  }

  render() {
    const { sectionData, currentComponent } = this.state

    return (
      <div className="App">
        <Header
          data={data}
          activeTab={sectionData.id}
          handler={this.setSectionData}
        />

        <div className="wrapper Layout">
          <Sidebar
            data={sectionData}
            handler={this.handleSidebar}
          />
          {this.getSectionContent(sectionData.id)}
        </div>
      </div>
    )
  }
}

export default App
