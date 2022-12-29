import MainLayout from '../components/main-layout';
import '../styles/globals.css';
import '../styles/general.sass';

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
