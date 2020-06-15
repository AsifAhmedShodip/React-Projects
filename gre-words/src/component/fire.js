import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAsSN9Qag61LObPy-zSc0l_G3h3hKtcu4Y",
    authDomain: "grewords-8bc5e.firebaseapp.com",
    databaseURL: "https://grewords-8bc5e.firebaseio.com",
    projectId: "grewords-8bc5e",
    storageBucket: "grewords-8bc5e.appspot.com",
    messagingSenderId: "564257141882",
    appId: "1:564257141882:web:7a8d3e544e84e3de91f7c3",
    measurementId: "G-P2H156B11M"
};  

const fire = firebase.initializeApp(firebaseConfig)
export default fire