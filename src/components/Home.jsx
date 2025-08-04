import { useEffect } from "react";
import { useState } from "react";

export function Home(){

    let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    
    // const test = async () => {
    //     const testmore = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    //     const res = await testmore.json();
    //     console.log(res.sprites.other['official-artwork'].front_default);
    //     // return res.sprites.other['official-artwork'].front_default;
    // }

    const [data, setData] = useState(null);
    useEffect(() => {
      const fetchData = async() => {
        try {
            const resp = await fetch(url);
            if(!resp.ok){
                throw new Error(`Error!! {resp.status}`);
            }
            const result = await resp.json();
            setData(result.sprites.other['official-artwork'].front_default);
        } catch (err){
            console.log(err);
        }
      };
      fetchData();
    });

    // let x = test();
    

    return(
      <div>
          <h1>Memory Game</h1>
          <a href="#"><img src={data} alt="" /></a>
      </div>

      
    );
}