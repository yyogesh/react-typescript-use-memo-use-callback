import React from 'react'
import usePokemon from '../hooks/usePokemon';

const Pokemon = () => {
    const { name, image, cravers, owners, weight, abilities } = usePokemon(1);
    return (
        <div className="App">
            <PokemonDetails
                name={name}
                image={image}
                weight={weight}
                abilities={abilities}
            />
            <Cravers count={cravers} />
            <Owners count={owners} />
        </div>
    );
}

export default Pokemon;



// Assume this is a component with an Expensive tree
// which does a lot of work
const PokemonDetails = React.memo(({ name, image, weight, abilities }: { name: string, image: string, weight: number, abilities: string }) => {
    console.log("Open console to see how many times this component renders");

    return (
        <div>
            <img height="200" src={image} alt={name} />
            <h1>{name}</h1>
            <h3>Weight: {weight} kg</h3>
            <h3>Abilities: {abilities}</h3>
        </div>
    );
});

const Cravers = ({ count }: { count: number }) => <h2>🤤 {count} People want this Pokemon</h2>;

const Owners = ({ count }: { count: number }) => <h2>😎 {count} People own this Pokemon</h2>;

