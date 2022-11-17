import { styles } from '../../styles/styles';

const style = {
  container: `w-full flex flex-col items-center justify-between my-6 cursor-pointer hover:bg-gradient-to-tr from-gray-900 to-gray-800 rounded-md py-6 ${styles.transition}`,
  image: 'w-28 object-contain mb-6',
  title:
		'text-lg md:text-2xl md:tracking-widest font-light text-[#0666f9] mb-2 md:mb-6 font-poppins ',
  symbol:
		'font-[400] text-gray-300 text-base md:text-lg font-oxygen',
};

const Exchange = ({ exchange }) => (
  <a
    href={exchange.url}
    target="_blank"
    rel="noopener noreferrer"
    className={style.container}
    data-aos="fade-up"
  >
    <img src={exchange.logo} alt="logo" className={style.image} />
    <div data-aos="fade-down" className={`${style.desc}`}>
      <p className={style.title}>{exchange.name}</p>
      <p className={style.symbol}>{exchange.symbol}</p>
    </div>
  </a>
);

export default Exchange;
