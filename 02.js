const mtk = 70;
const bahasaIndonesia = 85;
const bahasaInggris = 92;
const ipa = 73;
const rata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

if (
  typeof mtk === "number" &&
  typeof bahasaIndonesia === "number" &&
  typeof bahasaInggris === "number" &&
  typeof ipa === "number"
) {
  console.log("Rata-rata = " + rata);

  if (rata >= 90) {
    console.log("Grade = A");
  } else if (rata >= 80) {
    console.log("Grade = B");
  } else if (rata >= 70) {
    console.log("Grade = C");
  } else if (rata >= 60) {
    console.log("Grade = D");
  } else {
    console.log("Grade = E");
  }
} else {
  console.log("Semua nilai harus terisi");
}
