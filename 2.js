console.log("approach 1 ------------");

const NUMBERS_OF_LINES_TO_OUTPUT = 5;
//loop to generate lines
let lineOfStars = '';
for (let i = 1; i <= NUMBERS_OF_LINES_TO_OUTPUT; i++) {
    lineOfStars = lineOfStars + '*';
    console.log(lineOfStars);
};

console.log("approach 2 ------------");

const NUMBER_OF_LINES_TO_OUTPUT = 5;
let lineOfCharacters = '*'
//loop
for (let i=1; i<= NUMBER_OF_LINES_TO_OUTPUT; i++) {
    console.log(lineOfCharacters)
    lineOfCharacters += '*';
};


