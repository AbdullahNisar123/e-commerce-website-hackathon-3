import { Icon } from "@iconify/react/dist/iconify.js";

export default function ContactBody() {
  return (
    <div className="md:h-[1144px] w-full flex justify-center">
      <div className="md:w-[1058px] w-full flex flex-col items-center px-5 md:px-0 pt-[70px] md:pt-[90px] h-fit">
        <div className="text-center md:w-[644px] w-full">
          <h2 className="text-black text-[32px] md:text-[36px] font-semibold md:leading-[54px] text-center">
            Get In Touch With Us
          </h2>
          <p className="text-[#9F9F9F] text-[12px] md:text-[16px] font-normal md:leading-[24px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex gap-[30px] flex-col md:flex-row w-full ">
          <div className="order-2 md:order-none md:w-[393px] flex flex-col gap-[42px]  items-center md:py-[46px] py-[50px] px-[20px] relative md:top-[64px] h-fit">
            <div className="flex gap-[30px] md:w-fit w-full">
              <div className="flex ">
                <Icon
                  icon="carbon:location-filled"
                  className="w-[22px] h-[27px] text-black"
                />
              </div>
              <div className="w-[212px]">
                <h2 className="font-medium text-[24px] leading-[36px] text-black">
                  Address
                </h2>
                <p className="font-normal text-[16px] leading-[24px] text-black">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex gap-[30px] md:w-fit w-full">
              <div>
                <Icon
                  icon="bxs:phone"
                  className="w-[22px] h-[27px] text-black"
                />
              </div>
              <div className="w-[212px]">
                <h2 className="font-medium text-[24px] leading-[36px] text-black">
                  Phone
                </h2>
                <p className="font-normal text-[16px] leading-[24px] text-black">
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex gap-[30px] md:w-fit w-full">
              <div>
                <Icon
                  icon="bi:clock-fill"
                  className="w-[22px] h-[27px] text-black"
                />
              </div>
              <div className="w-[212px]">
                <h2 className="font-medium text-[24px] leading-[36px] text-black">
                  Working Time
                </h2>
                <p className="font-normal text-[16px] leading-[24px] text-black">
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="md:pt-[108px] md:pb-[63px] md:px-[53px] py-[50px] px-5 md:w-[635px] ">
            <div className=" flex flex-col gap-[36px]">
              <div className="h-fit w-full  ">
                <p className="text-[16px] text-black font-medium mb-[22px]">
                  Your name
                </p>
                <input
                  type="text"
                  placeholder="Abc"
                  className="text-[16px] text-[#9F9F9F] font-normal border-2 boder-[#9F9F9F] w-full rounded-[10px] py-[16px] px-[16px] "
                />
              </div>
              <div className="h-fit w-full  ">
                <p className="text-[16px] text-black font-medium mb-[22px]">
                  Email address
                </p>
                <input
                  type="text"
                  placeholder="Abc@def.com"
                  className="text-[16px] text-[#9F9F9F] font-normal border-2 boder-[#9F9F9F] w-full rounded-[10px] py-[16px] px-[16px] "
                />
              </div>
              <div className="h-fit w-full  ">
                <p className="text-[16px] text-black font-medium mb-[22px]">
                  Subject
                </p>
                <input
                  type="text"
                  placeholder="This is an optional"
                  className="text-[16px] text-[#9F9F9F] font-normal border-2 boder-[#9F9F9F] w-full rounded-[10px] py-[16px] px-[16px] "
                />
              </div>
              <div className="h-fit w-full  ">
                <p className="text-[16px] text-black font-medium mb-[22px]">
                  Message
                </p>
                <textarea
                  name="#"
                  id="#"
                  placeholder="Hi! i’d like to ask about"
                  className="text-[16px] text-[#9F9F9F] font-normal border-2 boder-[#9F9F9F] w-full rounded-[10px] pt-[16px] pb-[30px] px-[16px] "
                ></textarea>
              </div>
              <button className="bg-primary text-white px-[60px] md:px-[80px] py-[13px] font-normal text-[16px] w-fit rounded-[5px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
