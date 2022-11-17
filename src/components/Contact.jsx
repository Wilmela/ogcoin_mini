import { FaPhone, FaLocationArrow } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { send } from 'emailjs-com';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { styles } from '../styles/styles';

const style = {
  container: `flex flex-col md:flex-row md:justify-between gap-8 md:items-center ${styles.paddingY}`,
  contact:
		'flex flex-col items-center md:items-start justify-start gap-4 md:h-[400px]',
  icon: `w-10 h-10  flex items-center justify-center rounded-full bg-headingColor hover:bg-yellow-600 cursor-pointer ${styles.transition} `,
  svg: 'text-lg text-white font-bold',
  contactDetail: 'w-full flex items-center justify-start gap-4',
  detail: `font-light font-oxygen text-normal w-[25ch] md:w-[40ch] hover:text-headingColor cursor-pointer  ${styles.transition}`,
  formContainer: 'w-full md:w-[45%] my-2 flex flex-col items-center md:items-start',
  form: 'w-full flex flex-col items-start justify-start gap-4 ',
  label: 'w-full flex flex-col gap-2 font-oxygen',
  input:
		'p-2 rounded-sm border-none outline-none hover:bg-[#eee] cursor-pointer text-black',
  btn: `w-full flex items-center justify-center bg-headingColor font-poppins text-gray-200 rounded-sm hover:bg-yellow-600 py-2 mt-4 md:mt-0 md:w-[100px] ${styles.transition}`,
};

const Contact = () => {
  const [toSend, setToSend] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!toSend.user_name || !toSend.user_email || !toSend.message) {
      return toast.error('Please fill out the form');
    }

    try {
      await send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        toSend,
        process.env.REACT_APP_PUBLIC_KEY,
      );

      toast.success('Email sent successful');
      return setToSend({
        user_name: '',
        user_email: '',
        message: '',
      });
    } catch (error) {
      console.log(error);
      return toast.error('Failed');
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={style.container}>
        <div className={style.contact}>
          <p data-aos="fade-down" className={styles.headingText}>
            Contact us
          </p>
          <span data-aos="fade-left" className={style.contactDetail}>
            <span className={style.icon}>
              <FaPhone className={style.svg} />
            </span>
            <p className={style.detail}>
              <a href="tel:+2348139549853">+234 813 954 9853</a>
            </p>
          </span>
          <span data-aos="fade-right" className={style.contactDetail}>
            <span className={style.icon}>
              <MdEmail className={style.svg} />
            </span>
            <p className={style.detail}>
              <a href="mailto:info@ogsoftsolutions.com">
                info@ogsoftsolutions.com
              </a>
            </p>
          </span>
          <span data-aos="fade-left" className={style.contactDetail}>
            <span className={style.icon}>
              <FaLocationArrow className={style.svg} />
            </span>
            <p className={style.detail}>
              Suite 100, Adebola House, 38 Opebi Rd, Ikeja, Lagos State, Nigeria
            </p>
          </span>
        </div>

        <div className={style.formContainer}>
          <p data-aos="fade-down" className={styles.headingText}>
            Drop a message
          </p>
          <form data-aos="fade-left" onSubmit={submitForm} className={style.form}>
            <label className={style.label} htmlFor="name">
              Name:
              <input className={style.input} required type="text" onChange={handleChange} value={toSend.user_name} name="user_name" />
            </label>
            <label className={style.label} htmlFor="email">
              Email:
              <input className={style.input} required type="email" onChange={handleChange} value={toSend.user_email} name="user_email" />
            </label>
            <label className={style.label} htmlFor="message">
              Message
              <textarea
                className={style.input}
                cols={5}
                required
                type="text"
                onChange={handleChange}
                value={toSend.message}
                name="message"
              />
            </label>
            <button className={style.btn} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
