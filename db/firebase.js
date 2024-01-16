

const firebaseAdmin = require('firebase-admin');
const firebaseKey = require('../imready-17d85-firebase-adminsdk-3hlkg-05dc8bb736.json')


firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseKey),
    databaseURL: "https://imready-17d85-default-rtdb.firebaseio.com"
  });
  //FIRESTORE
  const firestoreDb = firebaseAdmin.firestore()

  module.exports = {

    firestoreDb
  }