import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyCu3mW4pPkDeL0MYDqE5fuSZQSnZG3ueBk",
        authDomain: "ab-management.firebaseapp.com",
        databaseURL: "https://ab-management.firebaseio.com",
        projectId: "ab-management",
        storageBucket: "",
        messagingSenderId: "924471341223",
        appId: "1:924471341223:web:dd811d3ebba215081c6b82"
    }
    firebase.initializeApp(config)
    firebase.firestore()
}
// const firestore = firebase.firestore()
// export { firestore }

export const auth = firebase.auth()
export const firestore = firebase.firestore()