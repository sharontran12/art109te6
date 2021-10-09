//chessboard
//setting the variables
// let size = 8 is setting the limit
//let board is setting a placeholder to be filled with out if statements
let size = 8;
let board = "";

//y represents rows
//x represents the columns

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);


