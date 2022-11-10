import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
           console.log(currentUser);
           setUser(currentUser);
           setLoading(false);
         });
          
         return () =>{
           return unsubscribe();
         }
       } , [])
   
       const authInfo = {
          user,
          loading,
          createUser,
          loginUser,
          googleLogin,
          logOut
       }
    return (
        

            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>

        
    );
};

export default AuthProvider;