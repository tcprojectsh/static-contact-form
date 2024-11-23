import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";
import cn from "clsx";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Content from "@/configs/content.json";
import Logo from "@/public/assets/images/logo.svg";

import { TTCommons } from "@/utils/customFonts";
import Checkbox from "@/components/Checkbox/Checkbox";
import BackButton from "@/components/BackButton";

import styles from "./contact.module.css";

export const ttCommonsLight = `${TTCommons.variable} font-ttCommons font-light`;

export type Inputs = {
  name: string;
  contact: number | null;
  location: string;
  key1: boolean;
  key2: boolean;
  key3: boolean;
  key4: boolean;
};

type CheckboxKeyType = "key1" | "key2" | "key3" | "key4";

const LoadingSpinner = () => {
  return (
    <div role="status" className="flex justify-center">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-400"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default function Contact() {
  const { contact } = Content["simsimau"];
  const [loading, isLoading] = useState(false);
  const { checkboxes } = contact.formfields;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      contact: null,
      location: "",
      key1: false,
      key2: false,
      key3: false,
      key4: false,
    },
  });

  const Form = () => {
    const router = useRouter();
    const { executeRecaptcha } = useGoogleReCaptcha();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
      handleSubmitForm(data);
    };

    const handleSubmitForm = useCallback(
      (data: any) => {
        if (!executeRecaptcha) {
          console.error("Execute recaptcha not yet available");
          return;
        }
        executeRecaptcha("formSubmit").then((gReCaptchaToken) => {
          isLoading(true);

          emailjs
            .send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
              "[TEMPLATE_ID_FROM_EMAILJS]",
              data,
              process.env.NEXT_PUBLIC_EMAILJS_PUB_KEY
            )
            .then(
              (result) => {
                router.push("/submitted");
                isLoading(false);
              },
              (error) => {
                console.error("Error submitting:", error.text);
                isLoading(false);
              }
            );
        });
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [executeRecaptcha]
    );

    return (
      <form className="smDesktop:px-10 px-2" onSubmit={handleSubmit(onSubmit)}>
        <Logo className="smDesktop:w-[160px] smDesktop:h-[160px] sm:h-[130px] sm:w-[130px] h-[100px] w-[100px] lg:mb-5 mr-auto ml-auto" />
        <div className="smDesktop:flex smDesktop:items-center mb-5">
          <div className="smDesktop:w-1/3">
            <label
              className={cn(
                ttCommonsLight,
                "text-[#FBD160] text-[20px] block smDesktop:text-right mb-1 smDesktop:mb-0 pr-4 uppercase"
              )}
            >
              {contact.formfields.text[0]}
            </label>
          </div>
          <div className="w-full">
            <div className="flex flex-col">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FBD160]"
                id="inline-full-name"
                type="text"
                {...register("name", {
                  required: "Please enter your name",
                })}
              />
            </div>
            {errors.name && (
              <span className="smDesktop:ml-4">
                <p className="text-red-600 bg-red-200 smDesktop:mt-0 mt-2 rounded-md text-center">
                  {errors.name.message}
                </p>
              </span>
            )}
          </div>
        </div>

        <div className="smDesktop:flex smDesktop:items-center mb-5">
          <div className="smDesktop:w-1/3">
            <label
              className={cn(
                ttCommonsLight,
                "block text-[#FBD160] text-[20px] smDesktop:text-right mb-1 md:mb-0 pr-4 uppercase"
              )}
            >
              {contact.formfields.text[1]}
            </label>
          </div>
          <div className="w-full">
            <div className="flex flex-col">
              <input
                className={cn(
                  styles.input,
                  "bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FBD160]"
                )}
                id="inline-contact"
                type="number"
                {...register("contact", {
                  required: "Please enter contact details",
                })}
              />
            </div>
            {errors.contact && (
              <span className="smDesktop:ml-4">
                <p className="text-red-600 bg-red-200 smDesktop:mt-0 mt-2 rounded-md text-center">
                  {errors.contact.message}
                </p>
              </span>
            )}
          </div>
        </div>

        <div className="smDesktop:flex smDesktop:items-center mb-5">
          <div className="smDesktop:w-1/3">
            <label
              className={cn(
                ttCommonsLight,
                "block text-[#FBD160] text-[20px] smDesktop:text-right mb-1 md:mb-0 pr-4 focus:border-[#FBD160] uppercase"
              )}
            >
              {contact.formfields.text[2]}
            </label>
          </div>
          <div className="w-full">
            <div className="flex flex-col">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FBD160]"
                id="inline-location"
                type="text"
                {...register("location", {
                  required: "Please enter location details",
                })}
              />
            </div>
            {errors.location && (
              <span className="smDesktop:ml-4">
                <p className="text-red-600 bg-red-200 smDesktop:mt-0 mt-2 rounded-md text-center">
                  {errors.location.message}
                </p>
              </span>
            )}
          </div>
        </div>

        <div className="md:mt-7 mt-4 flex flex-col max-w-[38rem] mr-auto ml-auto">
          {checkboxes.map((checkbox, index) => {
            const checkboxKey = checkbox.key as CheckboxKeyType;
            return (
              <Checkbox
                key={index}
                label={checkbox.label}
                register={register(checkboxKey)}
              />
            );
          })}
        </div>

        <div className="text-center mt-6">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <button
              className={cn(
                "text-white px-12 py-1 bg-[#9F9180] whitespace-nowrap min-w-min rounded-3xl hover:bg-white hover:text-[#69443C]"
              )}
            >
              <input
                className={cn(ttCommonsLight, "uppercase cursor-pointer")}
                type="submit"
              />
            </button>
          )}
        </div>
      </form>
    );
  };

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={
        process.env.NEXT_PUBLIC_GOOGLE_RECAPTURE_SITE_KEY_HTML as string
      }
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <div className="w-screen lg:grid lg:grid-cols-2 flex flex-col bg-[#51190D]">
        <div className="sm:px-20 sm:pt-10 sm:pb-6 px-4 pt-3 pb-3">
          <BackButton />
          <Form />
        </div>
        <div className="bg-kitchen min-h-screen bg-cover bg-center lg:block hidden" />
      </div>
    </GoogleReCaptchaProvider>
  );
}
