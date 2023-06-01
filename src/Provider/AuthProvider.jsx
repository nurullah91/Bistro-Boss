import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

   const updateUser = (name, photoUrl) =>{

   return updateProfile(auth.currentUser, {
        displayName:name, 
        photoURL: photoUrl
      })
   }

    const logOut = ()=>{
        setLoading(true);

        return signOut(auth)
    }

    // get user 
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);

            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data=>{
                    localStorage.setItem("token", data.data.token)

                })
            }

            else{
                localStorage.removeItem("token")
            }
            setLoading(false);
        });

        return( ()=>{
            unsubscribe();
        })

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;