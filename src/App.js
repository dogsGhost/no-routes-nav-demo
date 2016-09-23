// ES2015 import syntax works very similar to `require` in node
import React from 'react'
// import other components we need
import Nav from './Nav'
import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'

// these values are never changed by the app
var pageNames = [
  'Home',
  'Portfolio',
  'Contact',
  'Bad Link'
]

// create app component
var App = React.createClass({
  getInitialState: function() {
    // properties on this object are values that may change dynamically by
    // the user in the app 
    return {
      // start on the homepage
      currentPage: 'Home'
    }
  },

  // I like to use an underscore before methods that I created to
  // easily differentiate them from React-specific methods
  _showPageContent: function() {
    // this.state.currentPage references the currentPage property of
    // the object defined in `getInitialState`
    // a different component is returned depending on that property's value
    switch (this.state.currentPage) {
      case 'Home':
        return <Home />
      case 'Portfolio':
        return <Portfolio />
      case 'Contact':
        return <Contact />        
      default:
        // fallback; shown for 'Bad Link' since no case for that value 
        return 'bad value: no component found'
    }
  },
  
  _setCurrentPage: function(e) {
    // use the `setState` method to change the value of properties
    // initially defined in `getInitialState`
    // in this case we're just setting it to whatever the text is
    // inside the list-item that was clicked
    this.setState({
      currentPage: e.target.innerHTML
    })
  },

  render: function() {
    // we pass values as attributes on the Nav component so
    // we can use them inside that component
    // we call `this._showPageContent` to evaluate our state
    // and return the correct page content
    // variables and functions are included in the markup
    // by wrapping them in curly-braces.
    return (
      <div>
        <Nav
          pageNames={pageNames}
          handleNavClick={this._setCurrentPage}
          curPage={this.state.currentPage}
        />
        <main>
          {this._showPageContent()}
        </main>
      </div>
    )
  }
})

// ES2015 export syntax
export default App
