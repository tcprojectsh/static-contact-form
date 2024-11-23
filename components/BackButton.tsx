import Link from "next/link";
import { TTCommons } from "@/utils/customFonts";
import { FaChevronLeft } from "react-icons/fa";
import cn from "clsx";

export const ttCommonsLight = `${TTCommons.variable} font-ttCommons font-light`;

const BackButton = () => (
  <Link
    href="/"
    className={cn(
      ttCommonsLight,
      "w-fit md:text-[20px] md:mb-0 mb-2 py-1 pl-2 pr-3 text-[16px] text-white flex flex-row items-center align-middle justify-center bg-[#9F9180]/20 hover:bg-[#9F9180]/50 rounded-xl"
    )}
  >
    <FaChevronLeft size={20} className="mb-[3px] text-white mr-2" />
    Back
  </Link>
);
export default BackButton;
