import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/c.png";
import ProfileRing from "../assets/p3.png";

const ProfileIcon = () => {
    return (
    <div className="flex gap-2">
        {/* <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
            <TbGridDots size={20}  color="#5f6368"/>
        </span> */}
       
        {/* <span className="h-10 w-10 relative flex justify-center items-center">
            <img className="absolute cursor-pointer "  src={ProfileRing} alt="Sorry can't load image, some error occurred"/>
            <span className="h-8 w-8 rounded-full overflow-hidden">
                <img className="h-full w-full object-cover" src={Profile} alt="Sorry can't load image, some error occurred"/>

            </span>

        </span> */}


    </div>

    );
};

export default ProfileIcon;
