
import initializeFirebase from '../Firebase/Firebase.init';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from 'react';


initializeFirebase();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [loading,setLoading]=useState(true)
//   console.log(user);
    
    // google sign     
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

//  state change 
    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, (user) => {
              if (user) {
                setUser(user);
              } else {
                  setUser({});
                }
                setLoading(false);
            });
        }
        return unsubscribe;
    })
    //logOUt
    const Logout = () => {
        setLoading(true);
    signOut(auth)
      .then(() => {
          setUser({})
      }).finally(() => {
          setLoading(false);
      })
      
}

  return {
    googleSignIn,
    setUser,
    user,
    setLoading,
    loading,
    Logout,
  };
};

export default useFirebase;