

import { LuArrowDownUp } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";



export default function Secondheader() {
  return (
    <>
      <div className="bg-[#d9d9d9] lg:max-w-[1400px] mx-auto">
        <div className="flex justify-between md:px-2 sm:px-2 py-2">
            <div className="flex gap-5 lg:ml-5 mt-6 mb-2">
                <h1 className="bg-white rounded px-2 text-[12px]">Services</h1>
                <h1 className="bg-white rounded px-2 text-[12px]">Top AC service Provider</h1>
            </div>
            <div className="flex gap-1 leading-3 bg-white mt-3 mb-2 rounded-lg lg:mr-5 lg:px-3 py-1">
                <i><LuArrowDownUp /></i>
                <h3 className="text-[10px]">Sort by : Relevance</h3>
            </div>
        </div>
        
        <hr className="border border-t-[1px] border-slate-500" />
        <h1 className="mx-auto text-center underline font-bold">
          Ac Service Providers
        </h1>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-5">
          <div className="bg-white mt-5 shadow-lg rounded-lg">
            <div className="flex justify-between mx-auto pt-5">
              <div className="lg:flex gap-3 ml-2">
                <img
                  className="rounded-full lg:w-19 w-12 h-12   "
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <div>
                  <h1>Arjun Ravat</h1>
                  <p className="lg:text-[12px] text-[12px]">
                    Indian AC Services
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-center lg:leading-[45px] lg:text-[25px] hidden lg:block Sangram">
                  We are here to help you...
                </h1>
              </div>
              <div className="flex justify-end mr-2">
              <FaRegStar className="text-yellow-400" />
      <FaRegStar className="text-yellow-400" />
      <FaRegStar className="text-yellow-400" />
      <FaRegStar className="text-yellow-400" />
                <i><FaRegStar /></i>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col mt-2">
                <div className="basis-[30%] ml-2">
                <h1 className='text-[12px] font-semibold lg:text-[17px]'>Service Flow</h1>
                <li className='text-[10px] lg:text-[15px] ml-4'>Pre-service checks</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Jacket for mess-free service</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Indoor unit Foam-jet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Outdoor unit Powerjet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Final checks & clean-up</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Personal energy saving report</li>
                </div>
                <div className="basis-[65%] mx-auto my-auto lg:mr-20 gap-2 mt-5">
                    
                    <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-5 gap-3 sm:grid-cols-3 ">
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/18481912/pexels-photo-18481912/free-photo-of-modern-armchairs-and-a-coffee-table-in-a-minimalist-room.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/14465273/pexels-photo-14465273.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/4038907/pexels-photo-4038907.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>
            </div>

            <div className="flex justify-between mx-1 mt-2">
                <div>
                    <i className="opacity-30"><FaLocationDot /></i>
                    <p className="font-light text-[13px] leading-3">Hadapsar,Pune-411028</p>
                </div>
                <div className="flex gap-1 bg-green-700 px-3 py-2 rounded-xl mb-2">
                    <p className="leading-3 text-white text-[12px]">Contact</p>
                    <i className="text-white"><FaWhatsapp />
                    </i>
                </div>
            </div>
         </div>
         
         <div className="bg-white mt-5 shadow-lg rounded-lg">
            <div className="grid mx-auto grid-cols-3 pt-5">
                <div className="lg:flex gap-3 ml-2">
                    <img className="rounded-full lg:w-12 w-12 h-12" src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <div>
                        <h1>Vijay Shinde</h1>
                        <p className="lg:text-[12px] text-[12px]">Shinde Air Conditioning</p>
                    </div>

                </div>
                <div><h1 className="text-center lg:leading-[45px] lg:text-[25px] hidden lg:block Sangram">We are here to help you...</h1></div>
                <div className="flex justify-end mr-2">
                <FaRegStar className="text-yellow-400" />
      <FaRegStar className="text-yellow-400" />
      <FaRegStar className="text-yellow-400" />
      <FaRegStar className="text-yellow-400" />
                <i><FaRegStar /></i>
              </div>

            </div>
            <div className="flex lg:flex-row flex-col mt-2">
            <div className="basis-[30%] ml-2">
                <h1 className='text-[12px] font-semibold lg:text-[17px]'>Service Flow</h1>
                <li className='text-[10px] lg:text-[15px] ml-4'>Pre-service checks</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Jacket for mess-free service</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Indoor unit Foam-jet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Outdoor unit Powerjet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Final checks & clean-up</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Personal energy saving report</li>
                </div>
                <div className="basis-[65%] mx-auto my-auto lg:mr-20 gap-2 mt-5">
                    
                    <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-5 gap-3 sm:grid-cols-3">
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/18481912/pexels-photo-18481912/free-photo-of-modern-armchairs-and-a-coffee-table-in-a-minimalist-room.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/14465273/pexels-photo-14465273.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/4038907/pexels-photo-4038907.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>


            </div>

            <div className="flex justify-between mx-1 mt-2">
                <div className="flex">
                <i className="opacity-30"><FaLocationDot /></i>
                <p className="font-light text-[13px] leading-3">Wagholi,Pune-412207</p>
                </div>
                <div className="flex gap-1 bg-green-700 px-3 py-2 rounded-xl mb-2">
                    <p className="leading-3 text-white text-[12px]">Contact</p>
                    <i className="text-white"><FaWhatsapp /></i>

                </div>

            </div>


         </div>

            <div className="bg-white mt-5 shadow-lg rounded-lg">    
                <div className="grid mx-auto grid-cols-3 pt-5 ">
                    <div className="lg:flex gap-3 ml-2">
                        <img className="rounded-full lg:w-12 w-12 h-12" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <h1>Krishna Rao</h1>
                            <p className="lg:text-[12px] text-[12px]">Krishna Ac Services</p>
                        </div>
                    </div>
                    <div><h1 className="text-center lg:leading-[45px] lg:text-[25px] hidden lg:block Sangram">We are here to help you...</h1></div>
                    <div className="flex justify-end mr-2">
                    <FaRegStar className="text-yellow-400" />
                    <FaRegStar className="text-yellow-400" />
                    <FaRegStar className="text-yellow-400" />
                <i><FaRegStar /></i>
                <i><FaRegStar /></i>
              </div>

                </div>

                <div className="flex lg:flex-row flex-col mt-2">
                <div className="basis-[30%] ml-2">
                <h1 className='text-[12px] font-semibold lg:text-[17px]'>Service Flow</h1>
                <li className='text-[10px] lg:text-[15px] ml-4'>Pre-service checks</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Jacket for mess-free service</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Indoor unit Foam-jet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Outdoor unit Powerjet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Final checks & clean-up</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Personal energy saving report</li>
                </div>

                <div className="basis-[65%] mx-auto my-auto lg:mr-20 gap-2 mt-5">
                    
                    <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-5 gap-3 sm:grid-cols-3">
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/4038907/pexels-photo-4038907.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/18481912/pexels-photo-18481912/free-photo-of-modern-armchairs-and-a-coffee-table-in-a-minimalist-room.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="h-25 w-20" src="https://images.pexels.com/photos/14465273/pexels-photo-14465273.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>
                </div>

                <div className="flex justify-between mx-1 mt-2">
                    <div className="flex">
                    <i className="opacity-30"><FaLocationDot /></i>
                    <p className="font-light text-[13px] leading-3">Kharadi,Pune-411030</p>
                    </div>
                    <div className="flex gap-1 bg-green-700 px-3 py-2 rounded-xl mb-2">
                    <p className="leading-3 text-white text-[12px]">Contact</p>
                    <i className="text-white"><FaWhatsapp /></i>
                    </div>
                </div>
            </div> 


            <div className="bg-white mt-5 shadow-lg rounded-lg">
                <div className="grid mx-auto grid-cols-3 pt-5">
                    <div className="lg-flex gap-3 ml-2">
                        <img className="rounded-full lg:w-12 w-12 h-12" src="https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <h1>Sachin Borde</h1>
                            <p className="lg:text-[12px] text-[12px]">Air Cool Solutions</p>
                        </div>
                    </div>
                    <div><h1 className="text-center lg:leading-[45px] lg:text-[25px] hidden lg:block  Sangram">We are here to help you...</h1></div>
                    <div className="flex justify-end mr-2">
                    <FaRegStar className="text-yellow-400" />
                    <FaRegStar className="text-yellow-400" />
                    <FaRegStar className="text-yellow-400" />
                    <FaRegStar className="text-yellow-400" />
                    <FaRegStar className="text-yellow-400" />
              </div>
                </div>
                <div className="flex lg:flex-row flex-col mt-2">
                <div className=' basis-[30%] ml-2'>
                <h1 className='text-[12px] font-semibold lg:text-[17px]'>Service Flow</h1>
                <li className='text-[10px] lg:text-[15px] ml-4'>Pre-service checks</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Jacket for mess-free service</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Indoor unit Foam-jet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Outdoor unit Powerjet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Final checks & clean-up</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Personal energy saving report</li>
            </div>
            <div className="basis-[65%] mx-auto my-auto lg:mr-20 gap-2 mt-5 ">
                
                <div className="grid lg:grid-cols-5 grid-cols-2  md:grid-cols-5 gap-3 sm:grid-cols-3 ">
                        <img className="lg:h-25 w-20 " src="https://images.pexels.com/photos/14465273/pexels-photo-14465273.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="lg:h-25 w-20 " src="https://images.pexels.com/photos/4038907/pexels-photo-4038907.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="lg:h-25 w-20 " src="https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="lg:h-25 w-20 " src="https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <img className="lg:h-25 w-20 " src="https://images.pexels.com/photos/18481912/pexels-photo-18481912/free-photo-of-modern-armchairs-and-a-coffee-table-in-a-minimalist-room.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
            </div>
                </div>
                <div className="flex justify-between mx-1 mt-2">
                <div className="flex">
                    <i className="opacity-30"><FaLocationDot /></i>
                    <p className="font-light text-[13px] leading-3">Katraj,Pune-411006</p>
                    </div>
                    <div className="flex gap-1 bg-green-700 px-3 py-2 rounded-xl mb-2">
                    <p className="leading-3 text-white text-[12px]">Contact</p>
                    <i className="text-white"><FaWhatsapp /></i>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </>
  );
}
