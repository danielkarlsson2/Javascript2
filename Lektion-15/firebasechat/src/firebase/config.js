import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBrN9bWpAPLSS0jBgLipjHpNPF4r6Rt7Ic",
    authDomain: "vue3-firebasechat.firebaseapp.com",
    projectId: "vue3-firebasechat",
    storageBucket: "vue3-firebasechat.appspot.com",
    messagingSenderId: "656684916200",
    appId: "1:656684916200:web:4395fe535b49c351be585d"
}


initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export { db, auth }