let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A


const varAt = varA;
varA = varB;
varB = varC;
varC = varAt;




console.log (`${varA} ${varB} ${varC}`);