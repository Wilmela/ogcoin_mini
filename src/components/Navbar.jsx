import { useState, useEffect, useCallback } from 'react';
import { styles } from '../styles/styles';

import { navLinks } from '../constants';
import Button from './blocks/Button';
import images from '../assets/images';
import MenuItem from './blocks/MenuItem';

// import PAPER from '../assets/ogcWhitePaper.pdf';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [setShowNav]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  });

  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const style = {
    nav: `w-full flex items-center justify-center bg-gray-900 ${
      showNav
			&& 'animate-slideDown fixed top-100 h-[50px] left-0 right-0 px-4 md:px-8 lg:px-28 max-w-[1400px]'
    } py-8 z-50 `,
    container: 'w-full flex items-center justify-between  ',
    logoContainer: 'flex justify-start items-center gap-2',
    logo: 'w-8 md:w-10',
    linkContainer: 'flex-1 flex items-center justify-end',
    links: 'md:flex flex-col items-center hidden md:mr-4 lg:mr-8 xl-12 font-poppins',
    dot: 'w-2 h-2 rounded-full bg-transparent animate-bounce',
    linkTitle: `font-light text-lg uppercase text-gray-200 hover:text-[#0065fd] ${styles.transition}`,

    mobileContainer:
			'flex flex-col w-screen h-screen justify-evenly items-start ss:items-center gap-2 pt-[8%] ss:pt=[6%] bg-gray-800 fixed top-0 right-0 left-0 z-50 animate-slideLeft px-6',
    backToTopBtn: `fixed bottom-[20px] right-[20px] w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center animate-slideLeft z-30 opacity-[0.9] hover:bg-headingColor ${styles.transition}`,
  };

  return (
    <nav id="home" className={`${style.nav}`}>
      <div className={style.container}>
        <a href="#" className={style.logoContainer}>
          <img src={images.ogcoin} alt="logo" className={style.logo} />
          <p className="text-2xl md:text-3xl font-bold font-poppins ">OGCoin</p>
        </a>

        {/* Desktop links */}
        <div className={style.linkContainer}>
          {navLinks.map((navLink, index) => (
            <ul key={navLink.id} className={style.links}>
              <li
                className={`${style.dot} ${
                  active === navLink.id ? 'bg-[#0065fd]' : 'bg-transparent'
                }`}
              />
              <MenuItem
                navLink={navLink}
                index={index}
                setActive={setActive}
                className={style.linkTitle}
              />
            </ul>
          ))}

          <div className="hidden md:flex">
            <Button
              href="#exchanges"
              title="Buy"
              className={`hover:bg-[#0065fd] bg-transparent border-2 p-2 ${styles.btnStyle} `}
            />
          </div>
        </div>

        {/* mobile */}
        <img
          onClick={() => setToggle((prev) => !prev)}
          src={images.menu}
          alt="menu"
          className="cursor-pointer w-6 md:hidden"
        />

        <div className="md:hidden">
          {toggle && (
          <ul className={style.mobileContainer}>
            <li className="w-full flex justify-between">
              <a href="#" className={style.logoContainer}>
                <img src={images.ogcoin} alt="logo" className={style.logo} />
                <p className="text-2xl md:text-3xl font-bold ">OGCoin</p>
              </a>
              <img
                onClick={() => setToggle((prev) => !prev)}
                src={images.close}
                alt="menu"
                className="cursor-pointer w-6"
              />
            </li>

            {navLinks.map((navLink, index) => (
              <div className="flex flex-col items-center">
                <MenuItem
                  navLink={navLink}
                  index={index}
                  icon={navLink.icon}
                  setActive={setActive}
                  setToggle={setToggle}
                  className={`${active === navLink.id ? 'border-b' : ''
                  } flex items-center gap-4 text-lg uppercase
        text-gray-200 py-3 hover:text-headingColor transition font-poppins ss:text-2xl`}
                  handleClick={() => setToggle((prev) => !prev)}
                />
                {/* <a
      onClick={() => setActive(navLink.id)}
      key={navLink.id}
      target={`${i2 ? '_blank' : ''}`}
      href={`${i2 ? PAPER : `#${navLink.id}`}`}
      rel={`${i2 ? 'noopener noreferrer' : ''}`}
    >
      <p
        className={`${active === navLink.id ? 'border-b' : ''
        } flex items-center gap-4 text-lg uppercase
        text-gray-200 py-3 hover:text-headingColor transition font-poppins ss:text-2xl`}
        onClick={() => setToggle((prev) => !prev)}
      >
        {navLink.icon}
        {navLink.title}
      </p>
    </a> */}
              </div>
            ))}

            <div className="w-full flex justify-center my-3 ">

              <Button
                href="https://www.mintme.com/token/OGCoin%20E-health%20Africa/trade"
                title="Buy"
                className={`${styles.btnStyle} border-2 border-transparent w-[100%] ss:w-[40%] lowercase hover:bg-[#f5b915] hover:border-transparent bg-[#0065fd]  text-white`}
                target="_blank"
                onClick={() => setToggle(false)}
              />
            </div>

            <hr className="bg-white w-full" />

            <span className="w-full text-center font-light text-sm">
              &copy;
              {' '}
              {new Date().getFullYear()}
              {' '}
              OGSoft Solutions
              {' '}
            </span>
          </ul>
          )}
        </div>

        {showNav && (
        <button
          className={style.backToTopBtn}
          type="button"
          onClick={backToTop}
        >
          {' '}
          &#8679;
        </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
