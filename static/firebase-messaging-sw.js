importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
    
firebase.initializeApp({
    apiKey: "AIzaSyCeNd2VLyE5O5jSNXDt_ajthPlh3iqJsdc",
    authDomain: "jollysilks-ceaea.firebaseapp.com",
    databaseURL: "https://jollysilks-ceaea.firebaseio.com",
    projectId: "jollysilks-ceaea",
    storageBucket: "jollysilks-ceaea.appspot.com",
    messagingSenderId: "647542779952",
    appId: "1:647542779952:web:58db833e5ca9a2275f3df5",
    measurementId: "G-WSW736Q9GV"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();