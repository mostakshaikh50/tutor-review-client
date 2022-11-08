import React, { createContext } from 'react';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const AuthContext = createContext();
//const auth = getAuth(app); 

const AuthProvider = ({children}) => {
    return (
        <div>

            <AuthContext.Provider>
            {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;