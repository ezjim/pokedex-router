import React, { Component } from 'react';
import { getPokemon } from './api.js'
import DetailsPage from './DetailsPage';


export default class Detail extends Component {
    state = { pokemon: {} }

    async componentDidMount() {
        const data = await getPokemon(this.props.match.params._Id);
        
        // if (data.body.results) {


        this.setState({ pokemon: data.body})
            
        // }
    }

    render() {
        const { pokemon } = this.state;

        return (
            <DetailsPage pokeDex={ pokemon } />
      );
    }
}




// import React, { Component } from 'react'
// import { getPokemon } from './api.js'
// import DetailsPage from './DetailsPage';

// export default class Detail
//     extends Component {
//                 state = { pokemon: {} }
       
        
//         //this is you waiting at the cross walk. you just pressed the please let me walk across the street button.  now you wait, happylee
// async componentDidMount() {
//     const data = 
//     await getPokemon(this.props.match.params.pokeID);
//     console.log();


//         // CHECK CHAR ID AND MAKE SURE THAT ITS PROPER NAME FOR  pokeprops, aka {pokemon}
//         // look both ways before you cross the street.  
//         if(data.body.results) {
//             //if safe cross.
//         this.setState({ pokemon: data.body.results[0]})
//         console.log(data.body.results);
//          //you crossed the street.    
//         }}
    
//         render() {
//             const { pokemon } = this.state;
    
//             return (
//                 <DetailsPage pokemon={ pokemon } />
//           );
//         }
//     }