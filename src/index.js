module.exports = function solveSudoku(matrix) {
  function numbers(row, col) {
    let position = {
      row: Math.floor(row / 3) * 3,
      col: Math.floor(col / 3) * 3
    };
    let result = [];
    for (i = 0; i < 9; i++) {
      result.push([matrix[row][i], matrix[i][col], matrix[position.row + i % 3][position.col + Math.floor(i / 3)]])
    }
    return result;
  }
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] == 0) {
        let number = numbers(row, col);
        for (let num of number) {
          matrix[row][col] = num;
        }
      }
    }
  }
  return matrix;
}
