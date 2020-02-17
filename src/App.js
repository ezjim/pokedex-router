import React, { Component } from 'react';
import { 
  Route, 
  Link, 
BrowserRouter as Router } from 'react-router-dom';
import Detail from './Detail';
// import DetailsPage from './DetailsPage';
import About from './About';
import HomePage from './HomePage';
// import NotFound from './NotFound';
import './App.css';
import Header from './Header';
// import SearchBar from './SearchBar';


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
        <header>
          <Header />
        </header>
        <h2>PokeDex</h2>
        
          <Link to="/">homepage |</Link>
          <Link to="/About">about |</Link>
          <Link to="/List">List </Link>
        <switch>
          {/* <Route exact path="/:pokemon?" component={DetailsPage} /> */}
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/pokemon/" component={Detail} />
          <Route exact path="/About" component={About} />
        </switch>
      </div>
      </Router>
  ) }
}
          //this is you waiting at the cross walk. you just pressed the please let me walk across the street button.  now you wait, happylee
          



