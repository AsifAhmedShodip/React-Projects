const functions = require('firebase-functions');
const admin = require('firebase-admin')
const firebase = require('firebase')
const express = require('express')

const firebaseConfig = {
    apiKey: "AIzaSyCqB34bRqaGEwSRB9asscPp9hYsdMitTYQ",
    authDomain: "scream-social-app-50831.firebaseapp.com",
    databaseURL: "https://scream-social-app-50831.firebaseio.com",
    projectId: "scream-social-app-50831",
    storageBucket: "scream-social-app-50831.appspot.com",
    messagingSenderId: "730067302251",
    appId: "1:730067302251:web:09be7855b73964105a3e2e",
    measurementId: "G-797SH4982J"
};

const app = express()

admin.initializeApp()
firebase.initializeApp(firebaseConfig)


app.get('/scream', (request, response) => {
    admin
        .firestore()
        .collection('screams')
        .orderBy('createdAt', 'desc')
        .get()
        .then(data => {
            let screams = []
            data.forEach(doc => {
                screams.push({
                    screamId: doc.id,
                    body: doc.data().body,
                    userHandle: doc.data().userHandle,
                    createdAt: doc.data().createdAt
                })
            })
            return response.json(screams)
        })
        .catch((err) => console.error(err))
})


app.post('/scream', (request, response) => {
    
    const newScream = {
        body: request.body.body,
        userHandle: request.body.userHandle,
        createdAt: admin.firestore.Timestamp.fromDate(new Date())
    }


    admin.firestore()
        .collection('screams')
        .add(newScream)
        .then((doc) => {
            response.json({ message: `document created successfully !!` })
        })
        .catch((e) => {
            response.status(500).json({ error: `Something Wrong !!!` })
            console.error(e)
        })
});



exports.api = functions.https.onRequest(app)