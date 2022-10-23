import { styles } from '../../styles/styles';

const Button = ({
  href, title, className, onClick, target,
}) => (
  <a
    href={href}
    className={`${className} ${styles.transition}`}
    onClick={onClick}
    rel="noopener noreferrer"
    target={target}
  >
    {title}
  </a>
);

export default Button;
