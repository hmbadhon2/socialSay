import React, { createContext,useState,useEffect } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import { current } from 'daisyui/src/colors';


export  const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const updateUser = userInfo =>{
        setLoading(true)
        return updateProfile(auth.currentUser,userInfo)
    }


    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }



    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
       });
       return ()=> unSubscribe()
    },[])

    const googleUser = googleProvider =>{
        return signInWithPopup(auth, googleProvider);
    }
   
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        signIn,
        googleUser,
        logOut

    }


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;