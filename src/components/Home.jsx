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
           setPokemons((prevPokes => {
            const existingPokemon = prevPokes.find((poke) => poke.name === data.name);
            if(existingPokemon){
              console.log('existing pokemon');
              return prevPokes;
            } else {
              return [...prevPokes, {name: data.name, urlPic: data.sprites.other['official-artwork'].front_default}];
            }
           }));
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
        <ul>
          {
          /* {pokemons.length === 0 ? <p>True</p> : <p>False</p>} */
          pokemons.map((poke) => {
            return <li key={poke.name}>
              <button>
                <img src={poke.urlPic} alt={poke.name} />
                {poke.name}
              </button>
              </li>
          })
          }
        </ul>
        <p>Test</p>
        
    </div>

    
  );
}