import { useEffect } from "react";
import { useState } from "react";
import { pokeData } from "../pokeData";

export function Test(){
    let zz = [];
    let testArr = pokeData.map((pokemon) => getPicture(pokemon.url).then(data => zz.push(data)));
    console.log(zz[0]);
 
    
    // const test = async () => {
    //     const testmore = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    //     const res = await testmore.json();
    //     console.log(res.sprites.other['official-artwork'].front_default);
    //     // return res.sprites.other['official-artwork'].front_default;
    // }

    async function getPicture(url){
      try {
        const resp = await fetch(url);
          if(!resp.ok){
            throw new Error(`Error! {resp.status}`);
          }
          const result = await resp.json();
          const picture = result.sprites.other['official-artwork'].front_default;
          const pokeName = result.name;
          let obj = {};
          obj[pokeName] = picture;
          // console.log(pokeName);
          // console.log(picture);
          return obj;
        } catch (err) {
        console.log(err);
      }
    }

    // const [data, setData] = useState(null);
    // useEffect(() => {
    //   const fetchData = async() => {
    //     try {
    //         const resp = await fetch(pokeData.charmander.url);
    //         if(!resp.ok){
    //             throw new Error(`Error!! {resp.status}`);
    //         }
    //         const result = await resp.json();
    //         setData(result.sprites.other['official-artwork'].front_default);
    //         // setData(result.sprites.versions['ruby-sapphire'].front_default);
            
    //     } catch (err){
    //         console.log(err);
    //     }
    //   };
    //   fetchData();
    // });

    // let x = test();
    

    return(
      <div>
          <h1>Memory Game</h1>
          <a href="#"><img src='#' alt="" /></a>
      </div>

      
    );
}