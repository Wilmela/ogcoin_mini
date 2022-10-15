import { useEffect } from 'react';
import Aos from 'aos';
import { styles } from './styles/styles';
import {
  Navbar,
  Hero,
  Coin,
  About,
  // Exchange,
  // Values,
  // RoadMap,
  Team,
  // FAQ,
  Contact,
  Footer,
} from './components';

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const style = {
    app: 'w-full flex justify-center bg-gray-900 text-gray-200 overflow-hidden',
    container: `w-full ${styles.paddingX} max-w-[1240px] min-h-screen`,
  };
  return (
    <div className={style.app}>
      <div className={style.container}>
        <Navbar />
        <Hero />
        <Coin />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
      {/*
      <Exchange />
      <Values />
      <RoadMap />
      <FAQ />
     */}
    </div>
  );
}

export default App;
