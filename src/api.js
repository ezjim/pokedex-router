import request from 'superagent';

// umm maybe this is another crosswalk?
//  am i doing the same thing i did with componentdidnount?
//  hmmm

export const getPokemon = (pokemon) => 
    request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)