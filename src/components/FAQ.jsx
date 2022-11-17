import { faqs } from '../constants';
import { styles } from '../styles/styles';
import Accordion from './blocks/Accordion';

const style = {
  container: 'w-full flex flex-col items-center',
};
const FAQ = () => (
  <section className={styles.section} id="faq">
    <div className={style.container}>
      <p className={styles.headingText}>FAQ</p>
      <p className={styles.subHeadingText}>Frequently Asked Questions</p>
      <div className="w-full">
        <div className="w-full md:grid grid-cols-2 gap-6">
          {
          faqs.map(({ question, answer }) => (

            <Accordion key={question} question={question} answer={answer} />
          ))
        }
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
