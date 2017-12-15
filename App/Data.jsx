import React from 'react';

// Elements
import Buttons from './Sections/Elements/Buttons'

const data =  {

  colors: {
    id: 0,
    title: 'Colors',
    icon: 'fa-paint-brush',
    items: []
  },

  typography: {
    id: 1,
    title: 'Typography',
    icon: 'fa-font',
    items: []
  },

  layout: {
    id: 2,
    title: 'Layout',
    icon: 'fa-columns',
    items: [
      { name: 'Header' },
      { name: 'Footer' },
      { name: 'Column Left' },
      { name: 'Column Right' },
      { name: 'Catalog List' },
      { name: 'Section' },
    ]
  },

  elements: {
    id: 3,
    title: 'Elements',
    icon: 'fa-cube',
    items: [
      { name: 'Button', component: <Buttons/> },
      { name: 'Box' },
      { name: 'Portrait' },
      { name: 'Input' },
      { name: 'Notification' },
      { name: 'Badge' },
      { name: 'Tip' },
      { name: 'Checkbox' },
      { name: 'Option' },
      { name: 'Card' },
      { name: 'Modal' },
    ]
  },

  components: {
    id: 4,
    title: 'Components',
    icon: 'fa-cubes',
    items: [
      { name: 'Basic Form' },
      { name: 'Login Form' },
      { name: 'Signup Form' },
      { name: 'Modal Popup' },
      { name: 'Tabs' },
      { name: 'Search' },
      { name: 'Tag List' },
      { name: 'Product List' },
      { name: 'Product Carousel' },
      { name: 'Product Popup' },
      { name: 'Thumbnail List' },
    ]
  },

  animation: {
    id: 5,
    title: 'Animation',
    icon: 'fa-play-circle',
    items: []
  }

}




export default data
