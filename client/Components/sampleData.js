// const { db } = require('../../database');
// const { Client } = require('../../database/ClientINfoModel');

// const clients = [{
//   _id: 124123,
//   avatar: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
//   firstName: 'Becca',
//   lastName: 'Fuentes',
//   fullName: 'Becca Fuentes',
//   phone: '525-985-7844',
//   email: 'bfuent@gmail.com',
//   rating: 10
// }, {
//   _id: 23412,
//   avatar: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
//   firstName: 'Sandy',
//   lastName: 'Fuentes',
//   fullName: 'Sandy Fuentes',
//   phone: '548-552-8868',
//   email: 'sfquen@gmail.com',
//   rating: 9.8
// }, {
//   _id: 34521,
//   avatar: 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg',
//   firstName: 'Dana',
//   lastName: 'Carbajal',
//   fullName: 'Dana Carbajal',
//   phone: '554-874-6625',
//   email: 'dapolacar@gmail.com',
//   rating: 9.7
// }]

// clients.forEach((client) => {
//   let newClient = new Client(client)
//   console.log(client)
//   newClient.save((err, doc) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('saved')
//   })
// })