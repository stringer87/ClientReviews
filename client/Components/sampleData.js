// const { db } = require('../../database');
// const { Client } = require('../../database/ClientInfoModel');

// const clients = [
//   {
//     _id: 34521,
//     avatar: "https://ramcotubular.com/wp-content/uploads/default-avatar.jpg",
//     fullName: "Dana Carbajal",
//     firstName: "Dana",
//     lastName: "Carbajal",
//     fullName: "Dana Carbajal",
//     phone: "322-531-2124",
//     email: "dapo40@gamil.com",
//     rating: 9.7

//   },
//   {
//     _id: 23412,
//     avatar: "https://ramcotubular.com/wp-content/uploads/default-avatar.jpg",
//     firstName: "Sandy",
//     lastName: "Fuentes",
//     fullName: "Sandy Fuentes",
//     phone: "322-231-5164",
//     email: "sda122@gamil.com",
//     rating: 9.8
//   },
//   {
//     _id: 124123,
//     avatar: "https://ramcotubular.com/wp-content/uploads/default-avatar.jpg",
//     firstName: "Becca",
//     lastName: "Fuentes",
//     fullName: "Becca Fuentes",
//     phone: "322-231-5561",
//     email: "kds12@gamil.com",
//     rating: 10
//   }
// ]
// // console.log(RecentclientReview)
// clients.forEach((client) => {
//   let newClient = new Client(client)
//   newClient.save((err, doc) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('saved')
//   })
// })