import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";






export default function Secondfooter(){
    return(
        <>
        <div className="lg:max-w-[1400px] mx-auto">
            <div className="bg-blue-900 flex justify-between p-3 gap-3">
                <div className="flex gap-3 ml-5 text-white">
                    <i><FaInstagram /></i>
                    <i><FaLinkedin /></i>
                    <i><FaTwitter /></i>
                    <i><FaYoutube /></i>
                    <i><FaApple /></i>
                    <i><IoLogoGooglePlaystore /></i>
                </div>
                <div className="text-[12px] flex gap-10 mr-4 text-white mx-auto">
                    <h1>Advertise with us</h1>
                    <h1 className="">Contact us</h1>
                    <h1>Privacy Policy</h1>
                    <h1>Careers</h1>
                    <h1>Help Center</h1>
                </div>
            </div>

            <div>
                <h1 className="text-[12px] bg-gray-700 text-white p-1"><span className="ml-5">All trademarks,logos and names are properties of their respective ownerss. All Rights Reserved. @Copyright 2024 Real Estate Really Services limited</span></h1>
            </div>
        </div>

        </>
    )
}



