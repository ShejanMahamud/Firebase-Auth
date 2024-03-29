import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from 'react';
import app from "../firebase/firebase.config";

const Login = () => {
    const [user, setUser] = useState(null)
    const [logout, setLogout] = useState(false)
    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    const handleLogOut = () => {
        signOut(auth)
        .then(result => {setLogout(true)
        setUser(null)
        })
    }
    
  return (
    <div className='min-h-screen w-full flex items-center justify-center text-2xl flex-col'>

        {
            user ? <button onClick={handleLogOut} className="bg-green-500 text-white">Sign Out</button> : <button onClick={handleGoogleSignIn} className='bg-red-500 text-white'>Login with Google</button>
        }
        
        
        {
            user && <div className="border border-red-500 px-10 py-5 flex items-center gap-5 flex-col my-3">
                    <span>{user.displayName}</span>
                    <span>{user.email}</span>
                    <span>{user.emailVerified}</span>
                    <img className="rounded-full" src={user.photoURL} alt="" />
            </div>
        }

        {
            logout && !user &&  <span>Sucessfully Logged Out!</span>
        }

        
    </div>
  )
}
export default Login