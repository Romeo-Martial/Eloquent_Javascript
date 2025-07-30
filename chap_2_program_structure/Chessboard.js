const size = 8;
let HashOrSpace = "";
for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    if ((x + y) % 2 === 0) {
      HashOrSpace += " ";
    } else {
      HashOrSpace += "#";
    }
  }
  HashOrSpace += "\n";
}

console.log(HashOrSpace);