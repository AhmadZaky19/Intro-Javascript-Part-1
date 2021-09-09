const printSegitiga = 5;

if (typeof printSegitiga === "number") {
  for (i = printSegitiga; i >= 1; i--) {
    let print = "";

    for (j = 1; j <= i; j++) {
      print += j;
    }
    console.log(print);
  }
} else {
  console.log("Data harus number");
}
