import { useEffect } from "react";
import { useState } from "react";
import { pokeData } from "../pokeData";
import { shuffle } from "./helpers";
import { Score } from "./Score";

export function Home(){
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [win, setWin] = useState(false);

  // Run once
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

  // Handler for clicking a picture
  function clickEventHandler(e){
    // console.log(e.target.dataset.pokename);
    // console.log(e.target.tagName);
    let targ;
    targ = e.target.tagName !== 'BUTTON' ? e.target.parentNode : e.target;

    if(currentScore === pokemons.length){
      console.log('Winner');
      setWin(true);
      return;
    }

    // console.log(targ);
    // console.log(targ.dataset.pokename);
    if(clickedPokemons.includes(targ.dataset.pokename)){
      console.log('Already clicked');
      if(currentScore > topScore){
        setTopScore(currentScore);
      }
      setCurrentScore(0);
      setClickedPokemons([]);
    } else {
      // Score

      setCurrentScore(currentScore + 1);
      setClickedPokemons((prevClicked) => [...prevClicked, targ.dataset.pokename]);
    } 
    // console.log(clickedPokemons);
    

    // Shuffle the pokemons
    let test = shuffle(pokemons);
    setPokemons(test);
  }

  function scoreHandler(e){

  }
  

  if(win) return <div>Winner!</div>
  if(loading) return <div>Loading...</div>;
  if(error) return <div>Error: {error}</div>;
  // console.log(pokemons);
  
  return(
    <div>
        <h1>Memory Game</h1>
        <Score currentScore={currentScore} topScore={topScore}/>
        <ul>
          {
          /* {pokemons.length === 0 ? <p>True</p> : <p>False</p>} */
          pokemons.map((poke) => {
            return <li key={poke.name}>
              <button onClick={clickEventHandler} data-pokename={poke.name}>
                <img src={poke.urlPic} alt={poke.name} />
                {poke.name}
                <p>Pokename</p>
              </button>
              </li>
          })
          }
        </ul>
        <p>Test</p>        
    </div>

    
  );
}