export function Score({currentScore, topScore}){
  console.log('Score component');
  return(
    <div id='scoreboard'>
      <p id='currentScore'>{currentScore}</p>
      <p id='topScore'>{topScore}</p>
    </div>
  );
}