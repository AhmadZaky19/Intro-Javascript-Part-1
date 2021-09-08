let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
let newData = {
  ...data,
  name: "Ahmad Zaky",
  email: "a.zaky32@gmail.com",
  hobby: ["Sepak Bola", "Gaming", "Anime", "IT"],
};
console.log(newData);

const { street: jalan, suite, city: kota, zipcode } = data.address;
console.log(`Alamat: ${jalan}`);
console.log(`Kota: ${kota}`);
