import { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
// import { styles } from '../../styles/styles';

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div data-aos="fade-right" className="w-full ">
      <div className=" shadow-md my-4 md:my-0">
        <div className="w-full flex justify-between items-center px-4 py-2 bg-[#0b4aa8] rounded-tr-md rounded-tl-md">
          <div className="font-poppins text-base line-clamp-1 hover:line-clamp-none ">{question}</div>
          <div
            className="text-2xl cursor-pointer"
            onClick={() => setIsActive((prev) => !prev)}
          >
            {isActive ? <MdExpandLess /> : <MdExpandMore />}
          </div>
        </div>
        {isActive && (
        <div className="p-2 bg-[#062f6c] font-oxygen leading-[32px] rounded-br-md rounded-bl-md">
          {answer}
        </div>
        )}
      </div>
    </div>
  );
};
export default Accordion;
