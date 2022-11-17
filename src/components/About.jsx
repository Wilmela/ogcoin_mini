import Iframe from 'react-iframe';
import { listedAims } from '../constants';
import { styles, layout } from '../styles/styles';

const style = {
  container: 'w-full flex flex-col justify-center items-center',
  heading: 'flex flex-col items-center',
  about:
		'text-left text-lg min-w-[28ch] md:max-w-[80ch] leading-[35px] text-center',
  ourAim: 'w-full flex flex-col items-center md:flex-row gap-8 mt-8 md:mt-12',

  aims: 'flex flex-col gap-4 items-center',
  aimHeading: 'text-2xl leading-[35px] text-center md:text-left font-oxygen',
  aimList: 'w-full flex flex-col items-start justify-start gap-4 decoration-none ',
  listItem: 'w-full flex justify-start items-start gap-2',
};

const About = () => (
  <section id="about" className={layout.section}>
    <div className={style.container}>
      <div data-aos="fade-down" className={style.heading}>
        <p className={styles.headingText}>A Brief Introduction</p>
        <p className={styles.subHeadingText}>What is OGCoin e-Health Africa?</p>
      </div>
      <div className="md:w-[65%]">
        <p
          data-aos="fade-right"
          className={`${style.paragraph} ${style.about}`}
        >
          OGCoin E-Health Africa (OGC) is an ERC20 standard token built on
          Ethereum platform and network that creates access to OGSOFT SOLUTIONS
          LTD systems used for a secure and decentralized approach of confirming
          transactions within their ecosystem of connected healthcare centers in
          Africa
        </p>
      </div>

      <div data-aos="fade-right" className={style.ourAim}>
        <div className={style.aims}>
          <p className={style.aimHeading}>
            OGCoin E-Health Africa (OGC), OGsoft Solutions Limited aims to
          </p>

          <div className={style.aimList}>
            {listedAims.map((info) => (
              <div className={style.listItem} key={info.id}>
                <span className="flex items-center justify-center h-8">
                  {info.icon}
                </span>
                <span className="flex flex-col justify-start items-start">
                  <p className={`${styles.paragraph}  max-w-[60ch]`}>{info.text}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-left" className={style.video}>
          <Iframe
            url="https://www.youtube.com/embed/Z17umAvfEBE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            width="400"
            allowFullScreen
            // height="300"
            display="block"
            position="relative"
            className="w-full md:w-[500px] h-[350px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
