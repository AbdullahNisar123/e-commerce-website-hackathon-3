import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
export default function BlogBody() {
  return (
    <div className="md:px-[100px] py-[50px] flex flex-col items-center gap-5">
      <div className="flex gap-[30px] flex-col md:flex-row">
        <div className="flex flex-col gap-[54px] order-2 md:-order-none px-6 md:px-0">

          <div className="flex flex-col gap-[17px]">
            <Image
              src="/images/blog1.png"
              alt=""
              width={817}
              height={100}
            ></Image>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[15px]">
                <ul className="text-[#9F9F9F] text-[12px] md:text-[16px] font-normal flex gap-[10px] md:gap-[38px] ">
                  <li className="flex gap-2 items-center">
                    <Icon
                      icon="dashicons:admin-users"
                      width="20px"
                      height="20px"
                    />
                    <p>Admin</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="uis:calender" width="20px" height="20px" />
                    <p>14 Oct 2022</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="ci:tag" width="20px" height="20px" />
                    <p>Wood</p>
                  </li>
                </ul>
                <h3 className="text-[20px]  md:text-[30px] font-medium text-black">
                  Going all-in with millennial design
                </h3>
                <p className="text-[#9F9F9F] font-normal text-[13px]  md:text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div className="pb-[12px] border-b border-b-black text-[16px] font-normal text-black w-fit">
                <Link href="#">Read more</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[17px]">
            <Image
              src="/images/blog2.png"
              alt=""
              width={817}
              height={100}
            ></Image>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[15px]">
                <ul className="text-[#9F9F9F] text-[12px] md:text-[16px] font-normal flex gap-[10px] md:gap-[38px] ">
                  <li className="flex gap-2 items-center">
                    <Icon
                      icon="dashicons:admin-users"
                      width="20px"
                      height="20px"
                    />
                    <p>Admin</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="uis:calender" width="20px" height="20px" />
                    <p>14 Oct 2022</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="ci:tag" width="20px" height="20px" />
                    <p>Handmade</p>
                  </li>
                </ul>
                <h3 className="text-[20px]  md:text-[30px] font-medium text-black">
                Exploring new ways of decorating
                </h3>
                <p className="text-[#9F9F9F] font-normal text-[13px]  md:text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div className="pb-[12px] border-b border-b-black text-[16px] font-normal text-black w-fit">
                <Link href="#">Read more</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[17px]">
            <Image
              src="/images/blog1.png"
              alt=""
              width={817}
              height={100}
            ></Image>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[15px]">
                <ul className="text-[#9F9F9F] text-[12px] md:text-[16px] font-normal flex gap-[10px] md:gap-[38px] ">
                  <li className="flex gap-2 items-center">
                    <Icon
                      icon="dashicons:admin-users"
                      width="20px"
                      height="20px"
                    />
                    <p>Admin</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="uis:calender" width="20px" height="20px" />
                    <p>14 Oct 2022</p>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Icon icon="ci:tag" width="20px" height="20px" />
                    <p>Wood</p>
                  </li>
                </ul>
                <h3 className="text-[20px]  md:text-[30px] font-medium text-black">
                Handmade pieces that took time to make
                </h3>
                <p className="text-[#9F9F9F] font-normal text-[13px]  md:text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div className="pb-[12px] border-b border-b-black text-[16px] font-normal text-black w-fit">
                <Link href="#">Read more</Link>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="pt-[22px] px-[41px] pb-[61px] w-[393px] flex flex-col items-center gap-[43px]">
            <label className="h-[58px] w-full rounded-[10px] border border-[#9F9F9F] flex items-center">
              <input type="text" className="w-[90%]" />
              <Icon icon="akar-icons:search" className="text-[24px]" />
            </label>
            <div className="w-[251px] flex flex-col gap-[33px]">
              <h3 className="text-[24px] text-black font-medium">Categories</h3>
              <div className="text-[16px] text-[#9F9F9F] font-normal flex flex-col gap-[41px]">
                <div className="flex w-full justify-between">
                  <p>Crafts</p>
                  <p>2</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Design</p>
                  <p>8</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Handmade</p>
                  <p>7</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Interior</p>
                  <p>1</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Wood</p>
                  <p>6</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[393px] px-[65px] py-[16px]">
            <div className="flex flex-col gap-[26px]">
              <h3 className="text-[24px] text-black font-medium">
                Recent Posts
              </h3>
              <div className="flex flex-col gap-[39px]">
                <div className="flex gap-[12px] items-center">
                  <Image
                    src="/images/recentpost1.png"
                    alt=""
                    height={120}
                    width={120}
                    className="rounded-[10px]"
                  ></Image>
                  <div>
                    <p className="text-[14px] text-black font-normal">
                      Going all-in with millennial design
                    </p>
                    <p className="text-[12px] text-[#9F9F9F] font-normal">
                      03 Aug 2022
                    </p>
                  </div>
                </div>

                <div className="flex gap-[12px] items-center">
                  <Image
                    src="/images/recentpost2.png"
                    alt=""
                    height={120}
                    width={120}
                    className="rounded-[10px]"
                  ></Image>
                  <div>
                    <p className="text-[14px] text-black font-normal">
                      Going all-in with millennial design
                    </p>
                    <p className="text-[12px] text-[#9F9F9F] font-normal">
                      03 Aug 2022
                    </p>
                  </div>
                </div>

                <div className="flex gap-[12px] items-center">
                  <Image
                    src="/images/recentpost3.png"
                    alt=""
                    height={120}
                    width={120}
                    className="rounded-[10px]"
                  ></Image>
                  <div>
                    <p className="text-[14px] text-black font-normal">
                      Going all-in with millennial design
                    </p>
                    <p className="text-[12px] text-[#9F9F9F] font-normal">
                      03 Aug 2022
                    </p>
                  </div>
                </div>

                <div className="flex gap-[12px] items-center">
                  <Image
                    src="/images/recentpost4.png"
                    alt=""
                    height={120}
                    width={120}
                    className="rounded-[10px]"
                  ></Image>
                  <div>
                    <p className="text-[14px] text-black font-normal">
                      Going all-in with millennial design
                    </p>
                    <p className="text-[12px] text-[#9F9F9F] font-normal">
                      03 Aug 2022
                    </p>
                  </div>
                </div>

                <div className="flex gap-[12px] items-center">
                  <Image
                    src="/images/recentpost5.png"
                    alt=""
                    height={120}
                    width={120}
                    className="rounded-[10px]"
                  ></Image>
                  <div>
                    <p className="text-[14px] text-black font-normal">
                      Going all-in with millennial design
                    </p>
                    <p className="text-[12px] text-[#9F9F9F] font-normal">
                      03 Aug 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:gap-[38px] gap-[18px]">
        <button className="md:px-[24px] md:py-[15px] px-[20px] py-[10px] bg-[#B88E2F] md:text-[20px]  text-[15px] font-normal rounded-[10px] text-white w-fit h-fit">
          1
        </button>
        <button className="md:px-[24px] md:py-[15px] px-[20px] py-[10px] bg-[#F9F1E7] md:text-[20px]  text-[15px] font-normal rounded-[10px] text-black w-fit h-fit">
          2
        </button>
        <button className="md:px-[24px] md:py-[15px] px-[20px] py-[10px] bg-[#F9F1E7] md:text-[20px]  text-[15px] font-normal rounded-[10px] text-black w-fit h-fit ">
          3
        </button>
        <button className="md:px-[28px] md:py-[15px] px-[24px] py-[10px] bg-[#F9F1E7] md:text-[20px]  text-[15px] font-normal rounded-[10px] text-black w-fit h-fit">
          Next
        </button>
      </div>
    </div>
  );
}
