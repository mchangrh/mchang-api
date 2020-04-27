const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const helper = require('./helper')
let testimony_array = require('./testimony').testimony_array

// return testimony
exports.testimony = functions.https.onRequest((request, response) => {
    response.send(testimony())
})

function testimony() {
    return helper.multi_randomize(testimony_array) + "And then I met Jesus"
}