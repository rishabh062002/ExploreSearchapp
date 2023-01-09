import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
    return (
     <div className="foot">
     <footer className="bg-[#1F1F1F]">
            <hr />
        <div className="flex py-[3px] px-[15px] md:px-[30px] border-b border-[#dadce0]">
            <span style={{margin : "0px auto"}} className="text-white text-[17px] leading-none text-right  ">
                India - All &#169; copyrights reserved! - 2023
            </span>
            
            
        </div>
       

    </footer>
     </div>
   
    );
};

export default Footer;
