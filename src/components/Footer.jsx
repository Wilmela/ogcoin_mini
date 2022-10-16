import {
  FaFacebook, FaTwitter, FaInstagram, FaLink,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
  TwitterTimelineEmbed,
  // TwitterShareButton,
  TwitterFollowButton,
  //  TwitterHashtagButton,
  //  TwitterMentionButton,
  //  TwitterTweetEmbed,
  //  TwitterMomentShare,
  //  TwitterDMButton,
  //  TwitterVideoEmbed,
  //  TwitterOnAirButton
} from 'react-twitter-embed';
import { styles } from '../styles/styles';
import images from '../assets/images';
import { navLinks } from '../constants';

const style = {
  container: `w-full flex flex-col md:flex-row md:justify-between items-start ${styles.paddingY} gap-4`,
  left: 'w-full flex flex-col gap-8',
  logoContainer: 'w-full flex justify-center items-center md:justify-start gap-2',
  socials: 'w-full flex justify-evenly md:justify-start md:gap-4',
  iconCircle:
		'w-[40px] h-[40px] rounded-full bg-headingColor flex items-center justify-center hover:bg-yellow-600 ease-in-out duration-500',
  links: 'flex flex-wrap items-center justify-center md:justify-start gap-2',
  link: 'text-gray-400 hover:text-headingColor font-light leading-[1.5]',
  right: 'flex-1',
  rightTop: 'w-full mb-4',
  footer: 'w-full flex flex-col items-center lg:justify-between lg:flex-row',
  copyRight: 'text-gray-400 font-sm mb-4 text-center md:text-start',
  terms: 'flex gap-4 pb-8',
  bottomLink: 'text-gray-400 font-sm ',
};

const Footer = () => (
  <div>
    <div className={style.container}>
      <div data-aos="fade-up" className={style.left}>
        <div className={style.logoContainer}>
          <img src={images.ogcoin} alt="ogcoin" className="w-8 md:w-10 " />
          <p className="text-2xl font-bold">OGCoin</p>
        </div>
        <div className={style.socials}>
          <span className={style.iconCircle}>
            <a
              href="//www.facebook.com/ogsoftsolutions"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </span>
          <span className={style.iconCircle}>
            <a
              href="//www.twitter.com/OgSoftSolutions"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </span>
          <span className={style.iconCircle}>
            <a
              href="//info@ogsoftsolutions.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail />
            </a>
          </span>
          <span className={style.iconCircle}>
            <a
              href="//www.instagram.com/ogsoftsolutionsltd"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
          <span className={style.iconCircle}>
            <a href="#home">
              <FaLink />
            </a>
          </span>
        </div>
        <div className={style.links}>
          {navLinks.map((link) => (
            <p className={style.link} key={link.id}>
              {link.title}
            </p>
          ))}
        </div>
      </div>

      <div data-aos="fade-up" className={style.right}>
        <div className={style.rightTop}>
          <TwitterFollowButton screenName="ogSoftSolutions" />
        </div>
        <div className={style.rightBottom}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="ogSoftSolutions"
            options={{
						  tweetLimit: 5,
						  height: 300,
              width: 300,
            }}
          />
        </div>
      </div>
    </div>

    <div className={style.footer}>
      <p className={style.copyRight}>
        &copy;2022 OGCoin E-Health Africa all Rights Reserved.
      </p>
      <div className={style.terms}>
        <span className={style.bottomLink}>
          <a href="#home">Terms & Condition </a>
        </span>
        <span className={style.bottomLink}>
          <a href="#home">Privacy Policy</a>
        </span>
        <span className={style.bottomLink}>
          <a href="#contact">Contact us</a>
        </span>
      </div>
    </div>
  </div>
);

export default Footer;
