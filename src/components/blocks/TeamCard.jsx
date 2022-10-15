import React from 'react';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';

const TeamCard = ({
  image, name, position, fb, linkedIn,
}) => (
  <div className="w-full  md:h-[230px] h-[400px] max-h-[400px] md:w-[470px] flex flex-col md:flex-row items-center justify-start gap-4 p-4 rounded-md  hover:bg-gradient-to-tr from-gray-900 hover:scale-105 ease-in-out to-gray-600 cursor-pointer">
    <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-[#f5b915]">
      <img src={image} alt="profile" />
    </div>
    <div>
      <div className="w-[250px] flex flex-col gap-2 items-start">
        <h3 className="w-full text-2xl text-center md:text-left text-gray-400">
          {name}
        </h3>
        <p className="w-full text-sm text-center md:text-left font-light leading-[25px] capitalize text-headingColor flex-wrap">
          {position}
        </p>
        <span className="w-full flex items-center gap-2 justify-center md:justify-start">
          <a href={fb} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-500" />
          </a>

          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="hover:text-blue-500" />
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default TeamCard;
