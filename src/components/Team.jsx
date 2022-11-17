import { teamMembers } from '../constants';
import { styles } from '../styles/styles';
import TeamCard from './blocks/TeamCard';

const style = {
  container: `${styles.paddingY} relative`,
  heading: 'w-full flex flex-col items-center',
  team: 'w-full flex flex-col md:flex-row md:flex-wrap gap-4 justify-between',
};
const Team = () => (
  <section id="team" className={styles.section}>
    <div className={style.container}>
      <div data-aos="fade-down" className={style.heading}>
        <p className={styles.headingText}>Our Team</p>
        <p className={styles.subHeadingText}>Meet The Team</p>
      </div>

      <div data-aos="fade-up" className={style.team}>
        {teamMembers.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            image={member.image}
            position={member.position}
            fb={member.fb}
            linkedIn={member.linkedIn}
          />
        ))}
      </div>
      <div className={`${styles.whiteGradient} bottom-0 -left-60`} />
    </div>
  </section>
);

export default Team;
