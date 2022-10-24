import { useState, useEffect, useCallback } from 'react';
import { styles } from '../styles/styles';

import { navLinks } from '../constants';
import Button from './blocks/Button';
import images from '../assets/images';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleShow = useCallback(() => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [setShowNav]);

  useEffect(() => {
    window.addEventListener('scroll', handleShow);

    return () => {
      window.removeEventListener('scroll', handleShow);
    };
  }, [handleShow]);

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
    nav: `w-full flex items-center justify-center ${
      showNav
			&& 'animate-slideDown fixed top-100 h-[50px] left-0 right-0 px-4 md:px-8 lg:px-28'
    } py-8 bg-gray-900 z-50 `,
    container: 'w-full flex items-center justify-between  ',
    logoContainer: 'flex justify-start items-center gap-2',
    logo: 'w-8 md:w-10',
    linkContainer: 'flex-1 flex items-center justify-end',
    links: 'md:flex flex-col items-center hidden md:mr-4 lg:mr-6 xl-12',
    dot: 'w-2 h-2 rounded-full bg-transparent animate-bounce',
    linkTitle:
			`font-light text-lg uppercase text-gray-200 hover:text-[#0065fd] ${styles.transition}`,

    mobileContainer:
			'justify-start gap-2 pt-16 w-[80%] h-screen bg-gray-800 fixed top-[63px] right-0 z-50 border-gray-600 rounded-tl-md animate-slideLeft',
    backToTopBtn:
			`fixed bottom-[20px] right-[20px] w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center animate-slideLeft z-50 hover:bg-headingColor ${styles.transition}`,
  };

  return (
    <nav id="home" className={style.nav}>
      <div className={style.container}>
        <a href="#" className={style.logoContainer}>
          <img src={images.ogcoin} alt="logo" className={style.logo} />
          <p className="text-2xl md:text-3xl font-bold ">OGCoin</p>
        </a>

        <div className={style.linkContainer}>
          {navLinks.map((nav) => (
            <div className={style.links}>
              <div
                className={`${style.dot} ${
								  active === nav.id ? 'bg-[#0065fd]' : ''
                }`}
              />

              <a
                onClick={() => setActive(nav.id)}
                key={nav.id}
                href={`#${nav.id}`}
              >
                <p className={style.linkTitle}>{nav.title}</p>
              </a>
            </div>
          ))}

          <div className="hidden md:flex">
            <Button
              href="#contact"
              title="Contact"
              className={`bg-[#0065fd] hover:bg-transparent hover:border-2 ${styles.btnStyle} mr-6`}
            />

            <Button
              href="https://www.mintme.com/token/OGCoin%20E-health%20Africa/trade"
              title="Buy"
              className={`${styles.btnStyle} border-2 hover:border-transparent hover:bg-[#0065fd] border-white text-white`}
              target="_blank"
            />
          </div>
        </div>

        {/* mobile */}
        <img
          onClick={() => setToggle((prev) => !prev)}
          src={toggle ? images.close : images.menu}
          alt="menu"
          className="cursor-pointer w-6 md:hidden"
        />

        <div className="md:hidden">
          {toggle && (
          <div className={style.mobileContainer}>
            {navLinks.map((nav) => (
              <div className="flex flex-col items-center px-2 ">
                <a
                  onClick={() => setActive(nav.id)}
                  key={nav.id}
                  href={`#${nav.id}`}
                >
                  <p
                    className={`${
											  active === nav.id ? 'border-b' : ''
                    } text-lg uppercase text-gray-200 py-3 hover:text-headingColor transition`}
                    onClick={() => setToggle((prev) => !prev)}
                  >
                    {nav.title}
                  </p>
                </a>
              </div>
            ))}

            <div className="flex justify-center py-3 mt-6">
              <Button
                href="#contact"
                title="Contact"
                className={`bg-[#0065fd] w-[87px] lowercase hover:bg-transparent hover:border-2 ${styles.btnStyle} mr-6`}
                onClick={() => setToggle(false)}
              />

              <Button
                href="https://www.mintme.com/token/OGCoin%20E-health%20Africa/trade"
                title="Buy"
                className={`${styles.btnStyle} border-2 w-[87px] lowercase hover:border-transparent hover:bg-[#0065fd] border-white text-white`}
                target="_blank"
                onClick={() => setToggle(false)}
              />
            </div>
          </div>
          )}
        </div>

        {showNav && <button className={style.backToTopBtn} type="button" onClick={backToTop}> &#8679;</button>}
      </div>
    </nav>
  );
};

export default Navbar;
