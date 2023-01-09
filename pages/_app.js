import MainLayout from "../layouts/main-layout";
import "../styles/globals.css";
import "../styles/ham-menu.css";
import "../styles/general.sass";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
