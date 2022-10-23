import { FaPhone, FaLocationArrow } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { styles } from '../styles/styles';

const style = {
  container: `flex flex-col md:flex-row md:justify-between gap-8 md:items-center ${styles.paddingY}`,
  contact:
		'flex flex-col items-center md:items-start justify-start gap-4 md:h-[400px]',
  icon: `w-10 h-10  flex items-center justify-center rounded-full bg-headingColor hover:bg-yellow-600 cursor-pointer ${styles.transition}`,
  svg: 'text-lg text-white font-bold',
  contactDetail: 'w-full flex items-center justify-start gap-4',
  detail: `font-light text-normal w-[25ch] md:w-[40ch] hover:text-headingColor ${styles.transition}`,
  formContainer:
		'w-full mt-4 md:mt-0 md:w-[45%] flex flex-col items-center md:items-start',
  form: 'w-full flex flex-col items-start justify-start gap-4 ',
  label: 'w-full flex flex-col gap-2',
  input:
		`p-2 rounded-sm border-none outline-none hover:bg-[#eee] cursor-pointer',
	btn: 'w-full flex items-center justify-center bg-headingColor text-gray-200 rounded-sm hover:bg-yellow-600 py-2 md:w-[100px] ${styles.transition}`,
};

const Contact = () => {
  console.log('first');
  // const goTop = () => {
  //   window.scrollY({ top: 100, behavior: 'smooth' });
  // };

  return (
    <section id="contact" className={styles.section}>
      <div className={style.container}>
        <div className={style.contact}>
          <p data-aos="fade-down" className={styles.headingText}>Contact us</p>
          <span data-aos="fade-left" className={style.contactDetail}>
            <span className={style.icon}>
              <FaPhone className={style.svg} />
            </span>
            <p className={style.detail}>
              +234 813 954 9853
            </p>
          </span>
          <span data-aos="fade-right" className={style.contactDetail}>
            <span className={style.icon}>
              <MdEmail className={style.svg} />
            </span>
            <p className={style.detail}>
              ogsoftsolutions.com
            </p>
          </span>
          <span data-aos="fade-left" className={style.contactDetail}>
            <span className={style.icon}>
              <FaLocationArrow className={style.svg} />
            </span>
            <p className={style.detail}>
              Suit 100, Adebola House, 38 Opebi Rd, Ikeja, Lagos State, Nigeria
            </p>
          </span>
        </div>

        <div className={style.formContainer}>
          <p data-aos="fade-down" className={styles.headingText}>Drop a message</p>
          <form data-aos="fade-left" className={style.form}>
            <label className={style.label} htmlFor="name">
              Name:
              <input className={style.input} required type="text" id="name" />
            </label>
            <label className={style.label} htmlFor="email">
              Email:
              <input className={style.input} required type="email" id="email" />
            </label>
            <label className={style.label} htmlFor="message">
              Message
              <textarea className={style.input} cols={5} required type="text" id="message" />
            </label>
            <button className={style.btn} type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
