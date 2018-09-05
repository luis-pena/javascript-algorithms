const pascal = function(n) {
  let triangle = [];
  for (let y = 0; y < n; y++) {
    triangle.push(drawRow(y, triangle[y - 1]));
  }
  return triangle;
};

function drawRow(y, previousRow) {
  row = [];
  // x being used as the index on the horizontal axis of the triangle
  // y being used as the index on the vertical axis of the triangle
  for (let x = 0; x <= y; x++) {
    if (x === 0 || x === y) {
      row.push(1);
    } else row.push(previousRow[x - 1] + previousRow[x]);
  }
  return row;
}

console.log(pascal(7));
// logging pascal(7) should log:
// 1
// 1  1
// 1  2  1
// 1  3  3  1
// 1  4  6  4  1
// 1  5  10 10 5  1
// 1  6  15 20 15 6  1
