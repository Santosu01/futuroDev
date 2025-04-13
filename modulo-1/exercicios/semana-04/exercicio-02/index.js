const isEven = (value) => {
  let count = 0;
  let evenCount = 0;

  while (count <= value) {
    if (count > 0 && count % 2 == 0) {
      evenCount += 1;
    }

    count += 1;
  }

  return evenCount;
};

console.log(isEven(10));
