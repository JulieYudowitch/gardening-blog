/* eslint-disable react/no-unescaped-entities */
import Head from "next/dist/shared/lib/head";
import styles from "../styles/Login.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import GoogleLogin from '../components/Login/GoogleLogin.tsx';

function Login() {
    
  return (
    <div id="LoginPageTop">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Garden Blog Login" />
        <title>Login | Garden Blog</title>
      </Head>
      <Nav />
      <div className={styles.loginPage}>
        <GoogleLogin />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
