import React, { Component } from 'react'
// import Detail from 'Detail';



export default class DetailsPage extends Component {
    render() {
        const { pokeDex } = this.props;
    const {
        
        url_image,
        pokemon,
        HP,
        attack, 
        defense
    } = pokeDex;
    
    console.log (pokeDex);
    return (
        <li>
            <div>
                <p></p>
                <p><img alt='' src={ url_image } /></p>
                <p>Pokemon: { pokemon }</p>
                <p>HP: { HP }</p>
                <p>Attack: { attack }</p>
                <p>Defense: { defense }</p>
            </div>
        </li>
    )
}
}





// render() {
    
//     const { pokeDox } = this.props;
//     const {
//         url_image,
//         pokeDox,
//         HP,
//         Attack, 
//         Defense,
//     } = pokeDox;

// console.log('||||||||||', pokeDox)

//         return (
    //            <div> 
    
    //             <div className="details-card">
    //                 <p><span id="theactualname-box">Pokemon: { pokeDox }</span>/></p>
//             </div>

//             <div className="image-card">
//             <p><span id="image-box"><img src={ url_image } /></span>/></p>
//         </div>

//         <div className="HP-card">
//         <p><span id="HP-box">HP: { HP }</span>/></p>
//     </div>

//     <div className="Attack-card">
//     <p><span id="Attack-box">Attack: { Attack }</span>/></p>
// </div>

//             <div className="Defense-card">
//         <p><span id="Defense-box">Defense:  {Defense }</span>/></p>
//             </div>
//     }
// </div>
//         )
//     }
// }

            
       
        
    
    
    
    
        // <div>
        
        // <p>this.props.match.params.url_image</p>
        // <p>this.props.match.params.pokeDox </p>
        // <p>this.props.match.params.HP</p>
        // <p>this.props.match.params.Attack</p>
        // <p>this.props.match.params.Defense</p>
        // </div>                     