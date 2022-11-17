import { styles } from '../../styles/styles';

const style = {
  linkTitle: `font-light font-oxygen text-base uppercase text-gray-200 hover:text-blue-700 hover:font-bold ${styles.transition}`,
};
const DropdownItem = ({
  subMenus, className, setIsActive, setToggle,
}) => (
  <ul className={className}>
    {subMenus.map((subMenu) => (
      <li onClick={() => setIsActive(false)} className="py-1 list-none" key={subMenu.title}>
        <a href={`#${subMenu.id}`}>
          <p
            onClick={() => setToggle((prev) => !prev)}
            className={style.linkTitle}
          >
            {subMenu.title}
          </p>
        </a>
        <hr className="bg-gray-800" />
      </li>

    ))}
  </ul>
);

export default DropdownItem;
