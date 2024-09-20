export default function Footer(){
    return(
        <>
        <div className="bg-[#E5E7EB] w-full h-full flex justify-between gap-20 lg:max-w-[1400px] mx-auto">
            <div className="mx-7 mt-10">
                <div className="mt-5">
                    <h1 className="text-[13px] font-semibold">About Real Estate</h1>
                    <p className="text-[12px]">Real Estate is a full stack provider for all real estate need... <span className="Underline">Read More</span></p>
                </div>
                <div className="">
                    <h1 className="text-[13px] font-semibold  mt-10">More from our network</h1>
                    <div className="text-[12px]">
                        <p className=""><span className="mr-4">MensXp</span><span className="mr-4">iDiva</span><span className="mr-4">Gadgets Now</span><span className="mr-4">Economic Times</span>
                        <span className="mr-4">Filmfare</span><span className="mr-4">The Times Of India</span><span className="mr-4">USA Today</span><span className="mr-4">New York Post</span>
                        <span className="mr-4">Chicago Tribune</span></p>
                    </div>
                </div>
            </div>
            <div className="mx-7 mt-10">
                <div className="mt-5 sm:my-10">
                    <h1 className="text-[13px] font-semibold">Properties in India</h1>
                    <p className="text-[12px]">Property in Mumbai | Property in Pune | Property in Delhi | Property in New Mumbai | Property in Chennai | Property in Bengaluru | Property in Thane | Property in Pune | Property in Nagar | Property in Kalyan</p>
                </div>
                <div>
                    <h1 className="text-[13px] font-semibold mt-10">New Projects in India</h1>
                    <p className="text-[12px] mb-10">Property in Mumbai | Property in Pune | Property in Delhi | Property in New Mumbai | Property in Chennai | Property in Bengaluru | Property in Thane | property in Pune | Property in Nagar |Property in Kalyan</p>
                </div>
            </div>
        </div>
        </>
    )
}
