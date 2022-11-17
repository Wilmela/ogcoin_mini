import React from 'react';
import { styles } from '../styles/styles';
import Button from './blocks/Button';
import images from '../assets/images';

const style = {
  container:
		'w-full h-full flex flex-col-reverse items-center justify-center md:flex-row relative z-30',
  left: 'flex-1 flex flex-col justify-start items-start text-center md:text-left',
  subHeading:
		'w-full font-poppins text-xl text-headingColor md:text-2xl font-[400] leading-10 my-4 md:mb-4 tracking-wider',
  og: 'text-3xl text-white md:text-6xl font-[700] leading-[45px] md:leading-[70px] md:max-w-[15ch] font-poppins',
  btnContainer: 'w-full flex justify-between pt-8 md:justify-start md:gap-8',

};
// pt-[40px] md:pt-[80px]

const Hero = () => (
  <section className={styles.paddingY}>
    <div className={style.container}>
      <div className={style.left}>
        <p data-aos="fade-left" className={`${style.subHeading} font-ptSans py-2`}>
          Let&apos;s start trading with
        </p>

        <p data-aos="fade-right" className={style.og}>
          OGCoin E-Health Africa !!
        </p>
        <p data-aos="fade-left" className={styles.subHeading2}>
          powered by OGSoft Solutions Limited.
        </p>
        <div data-aos="fade-up" className={style.btnContainer}>

          <Button
            href="#explore"
            className={`${styles.btnStyle} bg-[#0666f9] hover:bg-[#0851e4] z-50 h-14 md:w-36`}
            title="Explore"
          />

          <Button
            href="http://ogsoftsolutions.com/"
            title="About Us"
            className={`${styles.btnStyle} bg-[#f5b915] hover:bg-[#e2aa10] z-50 h-14 md:w-36`}
            target="_blank"
          />
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="flex-[.5] flex justify-center items-center "
      >
        <img src={images.ogcoin} alt="logo" className="md:animate-bounce md:w-48 ob" />
      </div>

      <div className={`${styles.yellowGradient}  top-10 right-0 -z-10`} />
      <div className={`${styles.whiteGradient} bottom-0 left-0`} />
    </div>
  </section>
);

export default Hero;
