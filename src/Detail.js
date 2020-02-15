import React, { Component } from 'react'
import { getPokemon } from './api.js'
import PokeItem from './PokeItem.js';

export default class Detail
    extends Component {
                state = { pokemon: {} }
       
        
        //this is you waiting at the cross walk. you just pressed the please let me walk across the street button.  now you wait, happylee
    async componentDidMount() {
    const data = 
    await getPokemon(this.props.match.params.pokemon);

        // CHECK CHAR ID AND MAKE SURE THAT ITS PROPER NAME FOR  pokeprops, aka {pokemon}
        // look both ways before you cross the street.  
        if(data.body.results) {
            //if safe cross.
        this.setState({ pokemon: data.body.results[0]})
        console.log(data.body.results);
         //you crossed the street.    
        }}
    
render() {
        const { pokemon } = this.state;
        return (<PokeItem 
                    pokemon={pokemon } />);

    }}