//attempt 4th
//    *
//   ***
//  ******
// ********
// **********


const NUMBER_OF_LINES_TO_OUTPUT = 5;
//initialize number of starts
let numberOfStars = 1;
//loop to generate lines of characters
for (let i=1; i<= NUMBER_OF_LINES_TO_OUTPUT; i++) {
    let lineOfCharacters = '';
    //generate our spaces, it will loop the amount of: number of lines - i
    for(let j=1; j<= NUMBER_OF_LINES_TO_OUTPUT - i; j++) {
    lineOfCharacters+= ' ';
    }
    //generate the stars
    for (let k=1; k<=numberOfStars; k++){
        lineOfCharacters+= '*';
    }
    //output
    //modify the amount of stars
    numberOfStars+= 2; //add 2 stars each time we loop
    //log out lines of characters
    console.log(lineOfCharacters)
}
