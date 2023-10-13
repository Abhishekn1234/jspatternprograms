function printRevPyramid(h) {
  for (let i = 0; i < h; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * (h- i) - 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}


printRevPyramid(5);
