const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

exports.userCreate = functions.auth.user().onCreate(
    async (event) => {
        const user = {
            uid: event.uid,
            email: event.email
        };

        // Crear el documento en la colección "users"
        await db.doc(`users/${user.uid}`).set(user);


        return null; // O cualquier valor que desees devolver
    }
);