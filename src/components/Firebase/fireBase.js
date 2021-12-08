
import  firebase  from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
apiKey: "AIzaSyAwO1ktjvSfb0JIPNh_Ut-dBK7UFY4Lrbs",
authDomain: "valkiria-indumentaria.firebaseapp.com",
projectId: "valkiria-indumentaria",
storageBucket: "valkiria-indumentaria.appspot.com",
messagingSenderId: "304272148554",
appId: "1:304272148554:web:737e9d91a903a38109feb3",
measurementId: "G-HZS3DJMDLD"
};

const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore(){//me devuelve la conexion a mi base de datos
    return firebase.firestore(app)//inicializo la base de datos
}


