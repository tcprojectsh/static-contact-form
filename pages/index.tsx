import Link from "next/link";
import cn from "clsx";

import { HeadingNow, MagnoliaScript } from "@/utils/customFonts";
import Wrapper from "@/components/Wrapper";
import Content from "@/configs/content.json";

export const headingNowRegular = `${HeadingNow.variable} font-heading-now`;
export const magnolia = `${MagnoliaScript.variable} font-magnolia`;

export default function Home() {
  const { landing } = Content["simsimau"];

  return (
    <>
      <main>
        <Wrapper>
          <header
            className={cn(
              headingNowRegular,
              "uppercase md:text-xl text-sm text-white sm:mb-7 mb-3"
            )}
          >
            {landing.header}
          </header>
          <div className="smDesktop:w-[50%] mr-auto ml-auto">
            <header
              className={cn(
                magnolia,
                "smDesktop:text-[70px] md:text-[50px] text-[40px] text-white smDesktop:leading-[4.5rem] leading-[3rem]"
              )}
            >
              {landing.heading}
            </header>
            <div
              className={cn(
                headingNowRegular,
                "md:my-2 my-1 smDesktop:text-[46px] md:text-[40px] text-[30px] text-white smDesktop:leading-[4rem]"
              )}
            >
              simsim<span className="text-[#FBD160]">au.</span>com
            </div>
            <div
              className={cn(
                headingNowRegular,
                "smDesktop:text-[20px] md:text-[16px] text-md text-white sm:px-5 sm:mt-0 mb-3"
              )}
            >
              {landing.description}
            </div>
          </div>
          <div className="flex flex-col mt-2 w-min mx-auto my-auto">
            <Link
              href="/login"
              className={cn(
                headingNowRegular,
                "text-black smDesktop:text-[16px] text-sm smDesktop:px-10 px-6 smDesktop:py-3 py-2 bg-[#FFA857] whitespace-nowrap min-w-min rounded-3xl hover:bg-[#69443C] hover:text-white"
              )}
            >
              {landing.loginButtonText}
            </Link>
            <Link
              href="/contact"
              className={cn(
                headingNowRegular,
                "text-black smDesktop:text-[16px] text-sm mt-4 py-2 smDesktop:px-7 px-5 bg-[#FFA857] whitespace-nowrap rounded-3xl mx-auto my-auto hover:bg-[#69443C] hover:text-white"
              )}
            >
              {landing.contactButtonText}
            </Link>
          </div>
        </Wrapper>
      </main>
    </>
  );
}
