import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { AppContextProvider } from "../store/AppContext";
import initFirebase from "../firebase/initFirebase";

function MyApp({ Component, pageProps }: AppProps) {
  initFirebase();

  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
export default MyApp;
