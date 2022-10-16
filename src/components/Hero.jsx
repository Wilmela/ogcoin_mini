import React from 'react';
import { styles, layout } from '../styles/styles';
import Button from './blocks/Button';
import images from '../assets/images';

const style = {
  container:
		'w-full h-full flex flex-col-reverse items-center justify-center md:flex-row -z-10',
  left: 'flex-1 flex flex-col justify-start items-start text-center md:text-left',
  subHeading:
		'w-full font-poppins text-lg text-headingColor md:text-2xl font-[400] leading-10 my-4 md:mb-4 tracking-wider',
  og: 'text-3xl text-white md:text-6xl font-[700] md:leading-[70px] md:max-w-[15ch]',
  subHeading2: 'w-full mt-10 font-[400] text-gray-400 text-base',
  btnContainer: 'w-full flex justify-between mt-12 md:justify-start',

};

const Hero = () => (
  <section className={layout.section}>
    <div className={style.container}>
      <div className={style.left}>
        <p data-aos="fade-left" className={`${style.subHeading} py-2`}>
          Let&apos;s start trading with
        </p>

        <p data-aos="fade-right" className={style.og}>
          OGCoin e-Health Africa !!
        </p>
        <p data-aos="fade-left" className={style.subHeading2}>
          powered by OGSoft Solutions Limited.
        </p>
        <div data-aos="fade-up" className={style.btnContainer}>

          <Button
            href="#contact"
            className={`${styles.btnStyle} bg-[#0666f9] hover:bg-[#0851e4] md:mr-10`}
            title="Explore"
          />

          <Button
            href="http://ogsoftsolutions.com/"
            title="About Us"
            className={`${styles.btnStyle} bg-[#f5b915] hover:bg-[#e2aa10]`}
            target="_blank"
          />
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="flex-[.5] flex justify-center items-center "
      >
        <img src={images.ogcoin} alt="logo" className="md:animate-bounce" />
      </div>

      <div className={`${styles.yellowGradient}  top-20 right-20`} />
      <div className={`${styles.whiteGradient} bottom-0 left-0`} />
    </div>
  </section>
);

export default Hero;
