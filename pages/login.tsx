import cn from "clsx";
import { useForm } from "react-hook-form";

import { TTCommons, HeadingNow, MagnoliaScript } from "@/utils/customFonts";
import Content from "@/configs/content.json";
import Wrapper from "@/components/Wrapper";
import { useState } from "react";
import { useRouter } from "next/router";

export const ttCommonsLight = `${TTCommons.variable} font-ttCommons font-light`;
export const headingNowRegular = `${HeadingNow.variable} font-heading-now`;
export const magnolia = `${MagnoliaScript.variable} font-magnolia`;

export default function Login() {
  const router = useRouter();
  const { login } = Content["staticTemplate"];
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: any) {
    // Reset
    if (isError) setIsError(false);

    if (
      values.username === process.env.NEXT_PUBLIC_LOGIN_USERNAME &&
      values.password === process.env.NEXT_PUBLIC_LOGIN_PASSWORD
    ) {
      sessionStorage.setItem("token", `${process.env.NEXT_PUBLIC_FILE_TOKEN}`);
      router.push("/files");
    } else {
      setIsError(true);
    }
  }
  return (
    <Wrapper>
      <header
        className={cn(
          headingNowRegular,
          "uppercase md:text-xl text-sm text-white"
        )}
      >
        {login.header}
      </header>
      <header
        className={cn(
          magnolia,
          "sm:mt-10 mt-4 md:text-[56px] text-[40px] text-white"
        )}
      >
        {login.heading}
      </header>
      <div
        className={cn(
          ttCommonsLight,
          "mt-1 md:text-[26px] text-[20px] text-white"
        )}
      >
        {login.subheading}
      </div>

      {/* form */}
      <div className="px-[20%]">
        <form
          className="mx-auto my-auto smDesktop:mt-10 mt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="smDesktop:flex smDesktop:items-center xl:mb-6 mb-3">
            <div className="smDesktop:w-1/3">
              <label
                className={cn(
                  ttCommonsLight,
                  "block text-white text-[20px] mb-1 md:mb-0 pr-4"
                )}
              >
                <p className="smDesktop:text-right">LOGIN</p>
              </label>
            </div>
            <div className="w-full">
              <div className="flex flex-col">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FBD160]"
                  id="inline-full-name"
                  type="text"
                  {...register("username", {
                    required: "Please enter username",
                  })}
                />
              </div>
              {errors.username && (
                <span>
                  <p className="text-red-600 bg-red-200 mt-2 rounded-md">
                    {errors?.username?.message}
                  </p>
                </span>
              )}
            </div>
          </div>

          <div className="smDesktop:flex smDesktop:items-center xl:mb-6 mb-3">
            <div className="smDesktop:w-1/3">
              <label
                className={cn(
                  ttCommonsLight,
                  "block text-white text-[20px] mb-1 md:mb-0 pr-4"
                )}
              >
                <p className="smDesktop:text-right">PASSWORD</p>
              </label>
            </div>
            <div className="w-full">
              <div className="flex flex-col">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FBD160]"
                  id="inline-password"
                  type="password"
                  {...register("password", {
                    required: "Please enter password",
                  })}
                />
              </div>
              {errors.password && (
                <span>
                  <p className="text-red-600 bg-red-200 mt-2 rounded-md">
                    {errors?.password?.message}
                  </p>
                </span>
              )}
            </div>
          </div>
          {isError && (
            <span>
              <p className="text-red-700 mb-3">
                Wrong username or password entered
              </p>
            </span>
          )}

          <div className="text-center">
            <button
              className={cn(
                ttCommonsLight,
                "text-white px-12 py-1 xl:mt-0 mt-3 bg-[#9F9180] whitespace-nowrap min-w-min rounded-3xl hover:bg-white hover:text-[#69443C]"
              )}
              type="button"
              onClick={handleSubmit(onSubmit)}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
