
import initializeFirebase from '../Firebase/Firebase.init';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
    onAuthStateChanged,
    TwitterAuthProvider,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

initializeFirebase();


const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const useFirebase = () => {


    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);
  // console.log(user);
    
    // google sign     
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // twitter sign 
    const twitterSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider);

    }
   
    // get email
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    //get password
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    //get name
    const handleName = (e) => {
        setName(e.target.value);
    }
    
 

    // state change 
     useEffect(() => {
       const unSubcribe = onAuthStateChanged(auth, (user) => {
         if (user) {
           setUser(user);
         } else {
           setUser({});
         }
        setLoading(false);
       });
       return unSubcribe;
     }, []);
    //logOUt
    const Logout = () => {
        setLoading(true);
    signOut(auth)
      .then(() => {
          setUser({})
          toast("Good luck! Thanks to stay with us");
      }).finally(() => {
          setLoading(false);
      })
      
}

  return {
    googleSignIn,
    twitterSignIn,
    setUser,
    user,
    setLoading,
    loading,
    Logout,
    handleEmail,
      email,
    password,
    handlePassword,
    name,
    handleName,
    
  };
};

export default useFirebase;