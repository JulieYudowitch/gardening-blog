import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";

const Home = () => {
    const handleLogout = () => {
        signOut(auth);
        router.push("./")
    }
    const auth = getAuth();
    const router = useRouter();
    const authStateChangeHandler = (authState:any) => {
        if (!authState) {
            console.log("user is not logged in")
            router.push("/")
}
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChangeHandler);
        return () => {
            unsubscribe();
        }
    }, []);
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Home;