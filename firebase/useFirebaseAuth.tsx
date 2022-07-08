import auth from 'firebase/auth';
import { useEffect, useState } from "react";
import { Auth, getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import Nav from "../components/Nav/Nav";
import styles from "../styles/profile.module.css";
import loadConfig from "next/dist/server/config";

const useFirebaseAuth = () => {
    const router = useRouter();
    const [authUser, setAuthUser] = useState<auth.User | null>(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const handleLogout = () => {
      signOut(auth);
      router.push("./");
    };
   
    
    const authStateChangeHandler = (authState: any) => {
      if (!authState) {
        console.log("user is not logged in");
          router.push("/");
          setAuthUser(null);
          setLoading(false);
      } else {
          console.log("welcome back");
          setAuthUser(authState);
          setLoading(false);
      }
    };

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(authStateChangeHandler);
      return () => {
        unsubscribe();
      };
    }, []);
    return {
        user: authUser,
        loading: loading,
        logOut: handleLogout,
  };
};

export default useFirebaseAuth;
