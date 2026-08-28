// ══════════════════════════════════════════════════════════════
// CONFIGURACIÓN DE FIREBASE — "Conozcamos la Biblia"
// ══════════════════════════════════════════════════════════════
// Pega aquí las credenciales de tu proyecto de Firebase.
// Las sacas en: Firebase Console → ⚙️ Configuración del proyecto
// → General → "Tus apps" → app web → "Config".
//
// Si ya tienes un proyecto de Firebase para Club de Lectura, PUEDES
// crear uno nuevo aparte para este sitio (recomendado, para no
// mezclar datos), o reusar el mismo proyecto agregando una app web
// nueva dentro de él. Cualquiera de las dos formas funciona igual.
// ══════════════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey: "PEGA_AQUI_TU_API_KEY",
  authDomain: "PEGA_AQUI_TU_PROYECTO.firebaseapp.com",
  projectId: "PEGA_AQUI_TU_PROYECTO",
  storageBucket: "PEGA_AQUI_TU_PROYECTO.appspot.com",
  messagingSenderId: "PEGA_AQUI_TU_SENDER_ID",
  appId: "PEGA_AQUI_TU_APP_ID"
};

// No toques nada debajo de esta línea.
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
