import cn from "clsx";
import Image from "next/image";
import Content from "@/configs/content.json";
import { useRouter } from "next/router";
import Logo from "@/public/assets/images/logo.svg";
import BackButton from "@/components/BackButton";
import { TTCommons } from "@/utils/customFonts";

const ttCommonsLight = `${TTCommons.variable} font-ttCommons font-light`;

const Wrapper = ({ children }: { children: any }) => {
  const { landing } = Content["staticTemplate"];
  const router = useRouter();
  const submittedRoute = router.pathname === "/submitted";
  const homeRoute = router.pathname === "/";

  const bgImage = () => {
    if (submittedRoute) return "bg-table";
    else return "bg-chilli"; // home route
  };

  return (
    <div className={cn(bgImage(), "bg-cover bg-center")}>
      <div
        className={cn(
          homeRoute ? "lg:justify-start justify-center" : "pt-5",
          "flex flex-col sm:px-20 pt-10 sm:pb-6 px-4 min-h-screen mb-3"
        )}
      >
        {!homeRoute && <BackButton />}
        <div
          className={cn(
            submittedRoute && "mt-[5%]",
            "relative flex flex-col justify-between align-middle items-center mb-3"
          )}
        >
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                priority
                src={Logo}
                alt="Logo"
                width={150}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            </div>
            <div className="relative h-full"> {children}</div>
          </div>
        </div>
        <footer className="mr-auto ml-auto w-full lg:mt-auto mt-24">
          <p
            className={cn(
              ttCommonsLight,
              "text-center mb-4 text-md text-white whitespace-nowrap"
            )}
          >
            {landing.footer}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Wrapper;
