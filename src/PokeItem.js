import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        
        // const { pokemon } = this.props;
        // const {
        //     name,
        //     url_image,
        //     HP,
        //     Attack,
        //     Defense
        // }
        return (
    
        <div>
        
        <p>this.props.match.params.url_image</p>
        <p>this.props.match.params.name </p>
        <p>this.props.match.params.HP</p>
        <p>this.props.match.params.Attack</p>
        <p>this.props.match.params.Defense</p>
        </div>                     
              )
    }
}

