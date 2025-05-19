import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);
        const [loading,setLoading]=useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const userinfo = {
        createUser,
        signInUser,
        user,
        setUser,
        loading,
        setLoading,
    }

    return (
        <div>
            <AuthContext value={userinfo}>
                {
                    children
                }

            </AuthContext>
        </div>
    );
};

export default AuthProvider;