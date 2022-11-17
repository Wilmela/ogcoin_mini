import { styles } from '../../styles/styles';

const Button = ({
  href, title, className, target, onClick,
}) => (
  <a
    href={href}
    className={`${className} font-poppins ${styles.transition}`}
    rel="noopener noreferrer"
    target={target}
    onClick={onClick}
  >
    {title}
  </a>
);

export default Button;
