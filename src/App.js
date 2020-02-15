import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Detail from './Detail';
import PokeItem from './PokeItem'
// import About from './About';
// import NotFound from './NotFound';
import './App.css';

// Styled List Page Component that fetches characters by name on search (each Character has a react router Link to its Detail page)

// Styled Detail Page Component that uses this.props.match.params.whatever to make fetch on componentDidMount	

// Styled Search component that uses a callback to manage input state

//More Searches (by status, age, etc, using radio button options to select category)

// Make the list page fetch respond to url (input injects term into url, and url injects term into input)	+1
// Paging component
export default class App
extends Component {
  render (){
      return (
          <Router>
      <div>
        <h2>Search Bar</h2>
          <Link to="/">homepage</Link>
        <switch>
          <Route exact path="/:name?" component={PokeItem} />
        </switch>
      </div>
      </Router>
  ) }
}
          //this is you waiting at the cross walk. you just pressed the please let me walk across the street button.  now you wait, happylee
          



