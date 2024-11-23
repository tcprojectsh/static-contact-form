import Wrapper from "@/components/Wrapper";
import { TTRamillas } from "@/utils/customFonts";
import cn from "clsx";

export const ttRamillasLight = `${TTRamillas.variable} font-ttRamillas font-light`;

export default function Submitted() {
  return (
    <Wrapper>
      <p
        className={cn(
          ttRamillasLight,
          "smDesktop:text-[40px] text-[30px] text-white md:w-[60%] md:mr-auto md:ml-auto leading-[3rem] text-balance drop-shadow-2xl"
        )}
      >
        Based in <span className="italic">Melbourne</span>, we understand your
        craving for exquisite, affordable cuisine—experience the joy of cooking
        chef-level dishes right from your home.
      </p>
    </Wrapper>
  );
}
