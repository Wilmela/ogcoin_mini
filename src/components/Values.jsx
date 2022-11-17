import React from 'react';
import { values } from '../constants';
import { styles } from '../styles/styles';
import Value from './blocks/Value';

const style = {
  container: 'w-full text-center',
  value: 'w-full flex flex-col md:flex-row md:flex-wrap gap-10',
};

const Values = () => (
  <section id="values" className={styles.paddingY}>
    <div className={style.container}>
      <p className={styles.headingText}>Best Values</p>
      <p className={styles.subHeadingText}>OGCoin e-Health Africa Values</p>

      <div className={style.value}>
        {values.map((value) => (
          <Value key={value.title} value={value} />
        ))}
      </div>
    </div>
  </section>
);

export default Values;
