// 1. Go to firebase and create a project
// 2.register a app
//3. npm install firebase
//4. Add config file 
//5. Go docs > build > authentication > web > get started
//6. export app from firebase.config.js
//7. in login route > import getAuth from firebase/auth
//8.create auth : const auth = getAuth(app)
//9. import googleAuthProvider and create a provider const provider = new GoogleAuthProvider();
//10. use signInWithPopup and pass auth & provider
//11. go to firebase > build > authentication > signin method > google > use email and save 