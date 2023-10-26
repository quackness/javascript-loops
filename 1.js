// easy attempt
console.log("**********");
console.log("**********");
console.log("**********");
console.log("**********");

//loop logging the string
console.log("------------");

for (let i = 0; i < 4; i++) {
    console.log("**********");
}

console.log("------------");

const NUMBERS_OF_LINES_TO_OUTPUT = 4;
const NUMBER_OF_STARS_PER_LINE = 10;
//loop to generate lines
for (let i = 1; i <= NUMBERS_OF_LINES_TO_OUTPUT; i++) {
    let lineOfStars = '';
    //loop to generate a line fo stars
    for (let j = 1; j <= NUMBER_OF_STARS_PER_LINE; j++) {
        //biuild of string of stars
        //add a new charatcter
        lineOfStars = lineOfStars + '*';
    }
    //output the line we just. built
    console.log(lineOfStars);
};

console.log("------------");


