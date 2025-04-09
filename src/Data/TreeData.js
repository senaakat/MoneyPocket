// "use strict";

// const admin = require("firebase-admin");
// const serviceAccount = require("C:/Users/Senaa/Downloads/money-pocket-67ebc-firebase-adminsdk-tofzj-4a8e0e7478.json"); // Firestore servis hesabı anahtarınızın yolu

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://job/KaFWUwO7lLsU0K59T54G.firebaseio.com", // Firestore veritabanı URL'si
// });

// const db = admin.firestore();

const treeData = [
  {
    title: "Kamu",
    value: "kamu",
    children: [
      {
        title: "Doktor",
        value: "doktor",
      },
      {
        title: "Hemşire",
        value: "hemşire",
      },
      {
        title: "Öğretmen",
        value: "öğretmen",
      },
      {
        title: "Polis",
        value: "polis",
      },
      {
        title: "Diğer",
        value: "diğer_kamu",
      },
    ],
  },
  {
    title: "Özel Sektör",
    value: "özel sektör",
    children: [
      {
        title: "Mühendis",
        value: "mühendis",
      },
      {
        title: "Yazılım Geliştirici",
        value: "yazılım geliştirici",
      },
      {
        title: "Muhasebeci",
        value: "muhasebeci",
      },
      {
        title: "Satış Temsilcisi",
        value: "satış temsilcisi",
      },
      {
        title: "Diğer",
        value: "diğer_özel_sektör",
      },
    ],
  },
];

export default treeData;

// treeData.forEach((item, index) => {
//   db.collection("meslekler")
//     .doc(`meslek_${index}`)
//     .set(item)
//     .then(() => {
//       console.log(`Meslek_${index} eklendi.`);
//     })
//     .catch((error) => {
//       console.error(`Hata: ${error}`);
//     });
// });
// module.exports = treeData;
