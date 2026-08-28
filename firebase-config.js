// ══════════════════════════════════════════════════════════════
// CONFIGURACIÓN DE FIREBASE — "Conozcamos la Biblia"
// ══════════════════════════════════════════════════════════════
// Ya tiene tus credenciales pegadas. No necesitas tocar nada aquí.
// ══════════════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey: "AIzaSyC7XmBAUlLUIdeUE7ci73Ir7cziySHNCAY",
  authDomain: "conozcamos-la-biblia.firebaseapp.com",
  projectId: "conozcamos-la-biblia",
  storageBucket: "conozcamos-la-biblia.firebasestorage.app",
  messagingSenderId: "623241423753",
  appId: "1:623241423753:web:af500a392bec356e480f58"
};

// No toques nada debajo de esta línea.
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
