const style = {
  container:
		'w-full md:w-[180px] flex flex-col items-center justify-center gap-2 hover:bg-gradient-to-tr from-gray-900 to-gray-800 rounded-md py-4 cursor-pointer',
  logo: 'w-16',
  title: 'text-xl font-semibold font-poppins',
  symbol: 'text-base font-light text-gray-400 font-ptSans',
  percentage: 'text-sm font-light text-gray-400 font-oxygen',
};
const CoinCard = ({ coin }) => (
  <div className={style.container}>
    <img src={coin.image} alt="coin" className={style.logo} />
    <h4 className={style.title}>{coin.name}</h4>
    <h6 className={style.symbol}>
      {coin.symbol}
      {' '}
      |
      {' '}
      $
      {coin.current_price.toFixed(2)}
    </h6>
    <p className={style.percentage}>{coin.ath_change_percentage.toFixed(2)}</p>
  </div>
);

export default CoinCard;
