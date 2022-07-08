import Nav from "../components/Nav/Nav";
import useFirebaseAuth from "../firebase/useFirebaseAuth";
import styles from '../styles/profile.module.css';

const Profile = () => {
    
    const { user, loading, logOut } = useFirebaseAuth();
    if (loading) {
        return "Loading, please wait..";
    }
    return (
      <div>
        <Nav />
            <div className={styles.profile}>
                <p>Welcome</p>
                <button onClick={logOut}>Logout</button>
                
        </div>
      </div>
    );
}
export default Profile;