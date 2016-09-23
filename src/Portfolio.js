import React from 'react'

// because this component only contains markup
// the only React-specific method it would use is `render`
// when that is the case, you can define it as a fat-arrow function and
// just have that return your markup
const Portfolio = () => {
  // we can also define variables and do calculations here if needed
  var items = []
  return (
    <p>This is the Portfolio! It currently contains {items.length} items!</p>
  )  
}

export default Portfolio
