console.log("------------");

const NUMBERs_OF_LINES_TO_OUTPUT = 5;

for (let i=1; i<= NUMBERs_OF_LINES_TO_OUTPUT; i++) {
let lineOfCharacters = '';
    for(let j=1; j<=NUMBERs_OF_LINES_TO_OUTPUT - i; j++) {
    lineOfCharacters+= ' ';
    }
    for (let k=1; k<=i; k++){
        lineOfCharacters+= '*';
    }
    console.log(lineOfCharacters)
};
console.log("------------");