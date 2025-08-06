
// First try on making a shuffle function

// export function shuffle(arr){
//   console.log('Shuffling');
//   let shuffledArr;
//   let currIndex = arr.length;
//   console.log(arr.length);
//   while(currIndex !== 0){
//     // console.log(Math.floor(Math.random() * currIndex));
//     // console.log(Math.floor(Math.random() * currIndex));
//     let randomIndex = Math.floor(Math.random() * currIndex);
//     console.log(`Random Index is: ${randomIndex}`);
//     let x = arr[currIndex];
//     let y = arr[randomIndex];
//     console.log(`arr[currIndex] is ${arr[currIndex]}`);
//     // arr[currIndex] = arr[randomIndex];
//     // arr[randomIndex] = x;
//     currIndex--;
//   }
//   console.log(arr);
// //   return arr;
// }


export function shuffle(arrState){
    console.log('shuffle');
    console.log(arrState);
    let arr = [];

    arrState.forEach(element => {
        arr.push(element);
    });

    let currIndex = arr.length;
    let randomIndex;

    while(currIndex !== 0){
        randomIndex = Math.floor(Math.random() * currIndex);
        currIndex--;

        [arr[currIndex], arr[randomIndex]] = [arr[randomIndex], arr[currIndex]];
  
    }
    return arr;
}


