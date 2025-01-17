import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

type MyComponentProps = {
  name: string;
};

export default function PagesHeader({ name }: MyComponentProps) {
  return (
      <div
        className="bg-cover md:bg-contain bg-no-repeat flex justify-center items-center h-[316px] "
        style={{
          backgroundImage: `url("/images/ContactHeader-bg.png")`,
        }}
      >
        <div className="w-fit ">
          <div className="flex flex-col justify-cente items-center ">
            <div className="w-[60px] h-[60px] flex items-center justify-center ">
              <Image
                src="/images/Meubel House_Logos-05.png"
                alt="logo"
                width={50}
                height={100}
              />
            </div>
            <div>
              <h2 className="font-medium text-[48px] text-black">{name}</h2>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <Icon
              icon="material-symbols:keyboard-arrow-right"
              className="w-5 h-5 font-bold"
            />
            <p className="font-light text-[16px] text-black">{name}</p>
          </div>
        </div>
      </div>

  );
}
