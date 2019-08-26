import React from 'react'
import { BrowserRouter as Router,
          Route,
          Switch } from 'react-router-dom'
import AllCandies from './AllCandies.js'

const Root = () => {
  return (
  <Router>
    <div>
      <nav>
        Goodie Bag
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>Click around to find your goodies</p>
      </main>

      <Switch>
        <Route exact path="/candies" component={AllCandies} />
      </Switch>
    </div>
  </Router>
  )
}

export default Root
