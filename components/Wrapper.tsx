import cn from "clsx";
import Content from "@/configs/content.json";
import { useRouter } from "next/router";
import Logo from "@/public/assets/images/logo.svg";
import BackButton from "@/components/BackButton";
import { TTCommons } from "@/utils/customFonts";

const ttCommonsLight = `${TTCommons.variable} font-ttCommons font-light`;

const Wrapper = ({ children }: { children: any }) => {
  const { landing } = Content["simsimau"];
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
              <Logo
                className={cn(
                  submittedRoute
                    ? "smDesktop:w-[180px] smDesktop:h-[180px]"
                    : "smDesktop:w-[140px] smDesktop:h-[140px]",
                  "h-[100px] w-[100px] mb-3"
                )}
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
