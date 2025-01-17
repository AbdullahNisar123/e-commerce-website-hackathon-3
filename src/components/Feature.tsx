import Image from "next/image"
export default function Feature(){
    return(
        <div className="md:px-[53px] md:py-[100px] py-[35px] px-[23px] bg-[#FAF3EA] flex justify-center">
            <div className="flex w-full justify-between flex-col lg:flex-row gap-2">
                <div className="flex items-center gap-1 flex-col lg:flex-row">
                    <div className="w-[50px] h-[60px] flex items-center"><Image src="/images/trophy 1.png" width={100} height={100} alt="trophy"></Image></div>
                    <div className="text-Gray3 text-center md:text-left">
                        <p className="font-semibold text-[25px] text-[#242424]">High Quality</p>
                        <p className="font-medium text-[20px]">crafted from top materials</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 flex-col lg:flex-row">

                    <div className="w-[50px] h-[60px] flex items-center"><Image src="/images/guarantee.png" width={100} height={100} alt="trophy"></Image></div>
                    <div className="text-Gray3 text-center lg:text-left">
                        <p className="font-semibold text-[25px] text-[#242424]">Warranty Protection</p>
                        <p className="font-medium text-[20px]">Over 2 years</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 flex-col lg:flex-row">
                    <div className="w-[50px] h-[60px] flex items-center"><Image src="/images/shipping.png" width={100} height={100} alt="trophy"></Image></div>
                    <div className="text-Gray3 text-center lg:text-left">
                        <p className="font-semibold text-[25px] text-[#242424]">Free Shipping</p>
                        <p className="font-medium text-[20px]">Order over 150 $</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 flex-col lg:flex-row">
                    <div className="w-[50px] h-[60px] flex items-center"><Image src="/images/customer-support.png" width={100} height={100} alt="trophy"></Image></div>
                    <div className="text-Gray3 text-center lg:text-left">
                        <p className="font-semibold text-[25px] text-[#242424]">24 / 7 Support</p>
                        <p className="font-medium text-[20px]">Dedicated support</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}