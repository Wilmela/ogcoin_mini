import { useState } from 'react';
import { layout, styles } from '../styles/styles';
// import images from '../assets/images';
import CoinCard from './blocks/CoinCard';

import { useGetCoinByCurrencyQuery } from '../redux/services/coinGeeko';

const style = {
  container: 'flex-1 flex flex-col items-center gap-4 relative',
  coins: 'w-full md:flex flex-wrap justify-evenly gap-8 my-8 md:my-16',
  heading: 'flex flex-col items-center',
  search: 'p-4 rounded-[5px] w-full border-none outline-none hover:bg-[#eee] text-black',
};

// const data = [
//   {
//     id: 1,
//     image: images.ogcoin,
//     name: 'OGCoin',
//     symbol: 'OGC',
//     current_price: '$0.02',
//     ath_change_percentage: '2%',
//   },
//   {
//     id: 2,
//     image: images.ogcoin,
//     title: 'OGCoin',
//     symbol: 'OGC',
//     current_price: '$0.02',
//     ath_change_percentage: '2%',
//   },
//   {
//     id: 3,
//     image: images.ogcoin,
//     name: 'OGCoin',
//     symbol: 'OGC',
//     current_price: '$0.02',
//     ath_change_percentage: '2%',
//   },
//   {
//     id: 4,
//     image: images.ogcoin,
//     name: 'OGCoin',
//     symbol: 'OGC',
//     current_price: '$0.02',
//     ath_change_percentage: '2%',
//   },
// ];
const Rates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    data, isFetching, isError, error,
  } = useGetCoinByCurrencyQuery('usd');

  const filteredData = data?.filter((coin) => coin.name.includes(searchTerm)
  || coin.symbol.includes(searchTerm.toLowerCase()));

  return (
    <section id="rates" className={layout.section}>
      <div className={style.container}>
        <div data-aos="fade-down" className={style.heading}>
          <h1 className={styles.headingText}>Top Cryptocurrencies</h1>
          <p className={styles.subHeadingText}>Powered By CoinGeekoApi</p>

          <input
            data-aos="fade-right"
            type="text"
            placeholder="Enter name e.g. Bitcoin or btc"
            className={style.search}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          {isError && (
          <p className="mt-8 text-red-500">{error.error.slice(0, 24)}</p>
          )}
        </div>
        {!isFetching ? (
          <div data-aos="fade-left" className={style.coins}>
            {filteredData?.slice(0, 8).map((coin) => (
              <CoinCard
                key={coin.id}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                current_price={coin.current_price}
                ath_change_percentage={coin.ath_change_percentage}
              />
            ))}
          </div>
        ) : (
          <h1 className="animate-pulse mt-4 text-gray-400 font-light">
            ...Loading coin, please wait
          </h1>
        )}
        <div className={`${styles.yellowGradient} top-60 right-60`} />
      </div>
    </section>
  );
};

export default Rates;
