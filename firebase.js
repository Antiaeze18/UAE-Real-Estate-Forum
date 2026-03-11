// Firebase App (the core Firebase SDK) is always required and must be listed first
// Add these CDN scripts to your HTML files (before your app scripts):
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"></script>

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxAe0q0qiTP8b-xDGu4vUzmARPagMflZw",
  authDomain: "bcoin-382da.firebaseapp.com",
  projectId: "bcoin-382da",
  storageBucket: "bcoin-382da.firebasestorage.app",
  messagingSenderId: "20327148967",
  appId: "1:20327148967:web:5debea0f5b480cb46e9a82"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// Export auth for use in your components
window.firebaseAuth = auth;
