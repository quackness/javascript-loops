console.log("------------");

//allocate for spaces
//     *
//    **
//   ***
//  ****
// *****
const NUMBER_OF_LINES_TO_OUTPUT = 5;
let numberOfStars = 1;
let numberOfSpaces = 4;
//loop to generate lines
for (let i=1; i<= NUMBER_OF_LINES_TO_OUTPUT; i++) {
    let lineOfCharacters = '';
    //generate our spaces
    for(let j=1; j<=numberOfSpaces; j++) {
    lineOfCharacters+= ' ';
    }
    //generate the stars
    for (let k=1; k<=numberOfStars; k++){
        lineOfCharacters+= '*';
    }
    //output
    console.log(lineOfCharacters)
    //modify the values for spaces and stars
    numberOfSpaces--;//or numbersof spaces -= 1
    numberOfStars++;//or numbersof stars += 1
    // console.log(lineOfCharacters)

}

console.log("------------");

const NUMBERs_OF_LINES_TO_OUTPUT = 5;
let numbersOfStars = 1;
let numbersOfSpaces = NUMBERs_OF_LINES_TO_OUTPUT - 1;
//loop to generate lines
for (let i=1; i<= NUMBERs_OF_LINES_TO_OUTPUT; i++) {
    let lineOfCharacters = '';
    //generate our spaces
    for(let j=1; j<=numbersOfSpaces; j++) {
    lineOfCharacters+= ' ';
    }
    //generate the stars
    for (let k=1; k<=numbersOfStars; k++){
        lineOfCharacters+= '*';
    }
    //output
    console.log(lineOfCharacters)
    //modify the values for spaces and stars
    numbersOfSpaces--;//or numbersof spaces -= 1
    numbersOfStars++;//or numbersof stars += 1
    // console.log(lineOfCharacters)
};
console.log("------------");