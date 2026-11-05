// O slice() retorna uma cópia de parte do array sem alterar o original.

const scores = [120, 450, 300, 780, 250, 900];

const selectedScores = scores.slice(2, 5);

console.log(selectedScores);
console.log(scores);
