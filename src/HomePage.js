import React, { Component } from 'react';
import request from 'superagent';
import SearchBar from './SearchBar';
// import DetailsPage from './DetailsPage';
// import {Link} from 'react-router-dom'


export default class HomePage extends Component {
    state = {
        searchQuery: this.props.match.params._Id,
        pokemon: [],
    }
    async componentDidMount() {
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?_Id=${this.props.match.params._Id}`)
        this.setState({pokemon: data.body})
    }
    handleSearch = async (e) => {
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?_Id=${this.state.searchQuery}`)
        
        this.setState({
            pokemon: data.body.results, })
         
            this.props.history.push(this.state.searchQuery)
        }
        handleChange = (e) => this.setState({ searchQuery: e.target.vaule})
    render() {
         
    return(

        <main>
            <header>
        <SearchBar
        searchQuery={this.state.searchQuery}
        handleSearch={this.handleSearch}
        handleChange={this.handleChange}
        />
        </header>
            <p> this is the home page</p>
            <ul>
                
               
                {
                //  this.state.pokedex.map(pokemon =>
                //     <Link to={`_Id/${pokemon.pokemon}`}>  
                //        <DetailsPage pokeDex={ pokemon } />
                //     </Link>)
                }
            </ul>
        </main>

    )
    }
    
}