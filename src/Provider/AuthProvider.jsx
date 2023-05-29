import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
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