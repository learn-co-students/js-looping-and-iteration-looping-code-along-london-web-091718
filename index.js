// Code your solutions in this file
function printBadges(array){
  for(let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array
}

function tailsNeverFails(){
  let tails_flips = 0
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  while (maybeTrue()){
    ++tails_flips
    console.log(`You got ${tails_flips} tails in a row!`)
  }
  return `You got ${tails_flips} tails in a row!`
}
