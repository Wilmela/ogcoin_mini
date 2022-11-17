import { styles } from '../../styles/styles';

const style = {
  container: `flex flex-col items-center justify-between h-[300px] my-2 cursor-pointer hover:bg-gradient-to-tr from-gray-900 to-gray-800 rounded-md px-6 py-8 ${styles.transition}`,
  image: 'w-16 object-contain mb-6',
  title:
		'text-lg text-center md:text-2xl md:tracking-widest font-light text-[#0666f9] mb-2 md:mb-6 font-poppins uppercase ',
  desc: 'max-w-[27ch] md:text-center text-gray-400 text-base md:text-lg font-oxygen leading-[35px] hover:text-white line-clamp-2 hover:line-clamp-none',
};

const Value = ({ value }) => (
  <div data-aos="fade-up" className={style.container}>
    <img src={value.icon} alt="logo" className={style.image} />
    <div className={`${style.desc}`}>
      <p className={style.title}>{value.title}</p>
      <p className={style.desc}>{value.desc}</p>
    </div>
  </div>
);

export default Value;
