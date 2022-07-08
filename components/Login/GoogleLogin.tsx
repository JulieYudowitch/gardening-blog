import "./GoogleLogin.module.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
 import { useRouter } from "next/router";

const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const router = useRouter();
    const handleLogin = () => {
signInWithPopup(auth, provider)
  .then((result) => {
    
    // The signed-in user info.
      const user = result.user;
    console.log(user)
    router.push("/profile")
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
    return (
        <div>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    )
}

export default GoogleLogin;