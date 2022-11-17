export const styles = {
  paddingX: 'px-4 md:px-8 lg:px-28',
  paddingY: 'py-6 md:py-16 lg:py-24',
  heading: 'text-3xl',
  btnStyle:
		'w-[120px] p-2 rounded-[5px] flex items-center justify-center text-lg uppercase font-[400] cursor-pointer',
  headingText: 'text-2xl md:text-6xl mb-4 md:mb-8 font-bold font-poppins',
  subHeadingText:
		'text-lg md:text-2xl md:tracking-widest font-light text-[#0666f9] mb-10 md:mb-20 font-ptSans ',
  subHeading2:
		'w-full mt-10 md:mt-12 font-[400] text-gray-400 text-base md:text-lg font-oxygen',

  paragraph: 'tracking-wide font-light leading-[2] text-gray-300 font-oxygen',

  yellowGradient: 'yellow-gradient w-[50%] h-[60%] rounded-full absolute -z-10',
  whiteGradient: 'white-gradient w-[40%] h-[50%] rounded-full absolute -z-10 ',
  transition: 'ease-in duration-300',
};

export const layout = {
  flexCol: 'flex flex-col items-center justify-center',
  flexCenter: 'flex items-center justify-center',
  flexBtw: 'flex items-center justify-between',
  section: styles.paddingY,
};
