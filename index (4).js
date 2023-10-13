function printHoTriangle(h) {
  for (let i = 0; i < h; i++) {
    let row = "";
    for (let j = 0; j < h - i - 1; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      if (j === 0 || j === 2 * i || i === h- 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}


printHoTriangle(5);
