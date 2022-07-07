import "../styles/globals.css";
import * as React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from 'next/app';
import initFirebase from '../firebase';

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
   initFirebase();
  const timeoutRef = React.useRef();

  const clearTimer = React.useCallback(
    () => clearTimeout(timeoutRef.current),
    []
  );

  React.useEffect(() => {
    if (timeoutRef.current) clearTimer();

    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);

    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return (
   
      <Component {...pageProps} />
    
  );
};

export default App;
