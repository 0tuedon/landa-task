import React from "react";
import PropTypes from "prop-types";

interface AvatarProps {
  src?: string;
}
const Avatar = (props: AvatarProps) => {
  return (
    <>
      <img
        className="inline object-cover
        min-w-[24px] min-h-[24px] max-h-[24px] max-w-[24px] 
        lg:min-w-[40px] lg:min-h-[40px] lg:max-h-[40px] lg:max-w-[40px] mr-2 rounded-full"
        src="/avatar.png"
        alt="Profile image"
      />
    </>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  rest: PropTypes.object,
};
export default Avatar;
