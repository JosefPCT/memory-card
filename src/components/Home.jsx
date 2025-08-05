import { useEffect } from "react";
import { useState } from "react";
import { pokeData } from "../pokeData";

export function Home(){
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        pokeData.map(async(pokemon) => {
            const response = await fetch(pokemon.url);
            if(!response.ok){
              throw new Error(`Network response was not okay`);
            }
            const data = await response.json();
            // console.log('test');
            // addPokemon(data);
           setPokemons((prevPokes => [...prevPokes, {name: data.name, urlPic: data.sprites.other['official-artwork'].front_default}]));

          }
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemons();
  }, []);


  if(loading) return <div>Loading...</div>;
  if(error) return <div>Error: {error}</div>;
  console.log(pokemons);
  return(
    <div>
        <h1>Memory Game</h1>
        <a href="#"><img src='#' alt="" /></a>
        
    </div>

    
  );
}