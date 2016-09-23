import React from 'react'
// you can import css files!
import './Nav.css'

// `const` (ES2015 feature) can be used instead of `var` if
// the variable is never going to be re-assigned; think "the value remains constant"
const Nav = React.createClass({
  render: function() {
    // this.props is an object containing all those attributes we passed to Nav from App
    // here we're looping over the array of page names and creating a list-item for each one
    // use fat-arrow function here so reference to `this` is maintained
    const navItems = this.props.pageNames.map((pageName, index) => {
      // if the link text matches the current page we add an active class 
      const activeClass = pageName === this.props.curPage ? 'active': ''
      // className attr is for adding classes to elements since `class` is
      // a reserved word in JS
      // the key attribute is required by React when looping like this
      // onClick is for adding an event listener to the element for the click event
      // here we assign it the function we passed down via props 
      return (
        <li
          className={activeClass}
          key={index}
          onClick={this.props.handleNavClick}>
            {pageName}
        </li>
      )
    })

    return (
      <nav>
        <ul className="navList">
          {navItems}
        </ul>
      </nav>
    )
  }
})

export default Nav
