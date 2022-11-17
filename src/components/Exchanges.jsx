import React from 'react';
import { exchanges } from '../constants';
import { styles } from '../styles/styles';
import Exchange from './blocks/Exchange';

const style = {
  container: 'w-full text-center ',
  exchange: 'flex flex-col items-center justify-center md:flex-row md:gap-6',
};
const Exchanges = () => (
  <section id="exchanges" className={styles.paddingY}>
    <div className={style.container}>
      <p className={styles.headingText}>Exchanges</p>
      <p className={styles.subHeadingText}>
        OGCoin is listed on the followings:
      </p>
      <div className={style.exchange}>
        {exchanges.map((exchange) => (
          <Exchange key={exchange.name} exchange={exchange} />
        ))}
      </div>
    </div>
  </section>
);

export default Exchanges;
