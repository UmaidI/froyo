// I am going to make a prompt for the end user to put in how much ice cream
// they want
// then we will convert it into an array
// go through the array 
// count how many times it shows up in the array
// put it into an object data structure which displays in the console

const userEntry = prompt(`Enter a list of comma separated froyo flavors` , `vanilla,vanilla,vanilla,strawberry,coffee,coffee` );
const flavorArray = userEntry.split(`,`);
const flavorCount = {};
for(let i=0; i<flavorArray.length; i++){
  if (flavorCount[flavorArray[i]]){
    flavorCount[flavorArray[i]]++;
    // while there is nothing in the flavor count it wont ++ but it will use 
    // else statement and put the value of 1
    // if it does exist then it will add 1 to the value of it
  } else{ 
    flavorCount[flavorArray[i]] = 1;
  }
}

console.log(flavorCount);