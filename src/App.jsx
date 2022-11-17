import { useEffect } from 'react';
import Aos from 'aos';
import { Toaster } from 'react-hot-toast';
import { styles } from './styles/styles';
import {
  Navbar,
  Hero,
  Coin,
  About,
  Exchanges,
  Values,
  RoadMap,
  FAQ,
  Team,
  Contact,
  Footer,
} from './components';

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const style = {
    app: 'flex justify-center bg-gray-900 text-gray-200 overflow-hidden',
    container: `w-full ${styles.paddingX} max-w-[1400px] min-h-screen`,
  };
  return (
    <>
      <div className={style.app}>
        <div className={style.container}>
          <Toaster
            position="topRight"
            toastOptions={{
						  style: {
						    fontSize: '1rem',
						  },
            }}
          />
          <Navbar />
          <Hero />
          <Coin />
          <About />
          <Exchanges />
          <Values />
          <RoadMap />
          <Team />
          <FAQ />
          <Contact />
        </div>
      </div>

      <div className={`${style.app} bg-gradient-to-br from-black to-slate-800`}>
        <div className={style.container}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
