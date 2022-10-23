import { listedAims } from '../constants';
import { styles, layout } from '../styles/styles';

const style = {
  container: 'w-full flex flex-col justify-center items-center',
  heading: 'flex flex-col items-center',
  about:
		'text-center text-normal leading-[2] font-light min-w-[28ch] md:max-w-[85ch] text-gray-400',
  ourAim: 'w-full flex flex-col items-center md:flex-row gap-8 mt-8 md:mt-12',

  aims: 'flex flex-col gap-4 items-center text-gray-200',
  aimHeading: 'text-2xl leading-[38px] mb-4 text-center md:text-left',
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
      <p data-aos="fade-right" className={style.about}>
        OGCoin E-Health Africa (OGC) is an ERC20 standard token built on
        Ethereum platform and network that creates access to OGSOFT SOLUTIONS
        LTD systems used for a secure and decentralized approach of confirming
        transactions within their ecosystem of connected healthcare centers in
        Africa
      </p>

      <div data-aos="fade-right" className={style.ourAim}>
        <div className={style.aims}>
          <h4 className={style.aimHeading}>
            OGCoin E-Health Africa (OGC), OGsoft Solutions Limited aims to
          </h4>

          <div className={style.aimList}>
            {listedAims.map((info) => (
              <div className={style.listItem} key={info.id}>
                <span className="flex items-center justify-center h-8">{info.icon}</span>
                <span className="flex flex-col justify-start items-start">
                  <p className="tracking-wide font-light leading-[2] text-gray-400">
                    {info.text}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-left" className={style.video}>
          <iframe
            src="https://www.youtube.com/embed/Z17umAvfEBE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						// allowfullscreen="true"
            width="500"
            height="315"
            frameBorder="0"
            className="w-full md:w-[500px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
