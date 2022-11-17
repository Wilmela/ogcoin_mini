import PAPER from '../../assets/ogcWhitePaper.pdf';
import DropdownItem from './DropdownItem';

const MenuItem = ({
  navLink, index,
  setActive, className,
  icon, handleClick, setToggle,
}) => {
  const i2 = index === 2;
  const active = () => setActive(navLink.id); // Active the dot on the nav title
  return (
    <li onClick={handleClick}>
      {navLink.subMenus ? (
        <div className="menuItem">
          <a href="#about" onClick={active}>
            <p className={className}>
              {icon || null}
              {navLink.title}
            </p>
          </a>
          <div>
            <div className={`${active && 'hidden'}`}>
              <DropdownItem
                subMenus={navLink.subMenus}
                setToggle={setToggle}
                className="absolute bg-gradient-to-tr from-gray-900 to-slate-700 p-2 rounded-sm w-[150px] "
              />
            </div>
          </div>
        </div>
      ) : (
        <a
          onClick={active}
          key={navLink.id}
          target={`${i2 ? '_blank' : ''}`}
          href={`${i2 ? PAPER : `#${navLink.id}`}`}
          rel={`${i2 ? 'noopener noreferrer' : ''}`}
        >
          <p className={className}>
            {icon || null}
            {navLink.title}
          </p>
        </a>
      )}
    </li>
  );
};

export default MenuItem;
