import { forwardRef } from "react";
import cn from "clsx";

import { FaCheck } from "react-icons/fa";
import { TTCommons } from "@/utils/customFonts";

type Props = {
  label: string;
  register: any;
};

export const ttCommonsLight = `${TTCommons.variable} font-ttCommons font-light`;

const Checkbox = (props: Props) => {
  const { label, register } = props;

  return (
    <div className="flex items-center w-full">
      <label className="flex items-center justify-between w-full py-2 cursor-pointer">
        <p
          className={cn(
            ttCommonsLight,
            "md:text-[20px] text-[16px] block uppercase text-[#FBD160]"
          )}
        >
          {label}
        </p>

        <div className="grid place-items-end">
          <div className="inline-flex items-center">
            <label
              className={cn(
                ttCommonsLight,
                "relative flex items-center cursor-pointer"
              )}
            >
              <input
                className="before:content[''] peer relative appearance-none shrink-0 w-5 h-5 rounded-sm border-[3px] border-s-white cursor-pointer"
                type="checkbox"
                {...register}
              />
              <div className="absolute right-0 translate-x-1 -translate-y-[1px] text-white text-lg w-5 h-5 ml-1 hidden peer-checked:block pointer-events-none">
                <FaCheck />
              </div>
            </label>
          </div>
        </div>
      </label>
    </div>
  );
};

const CheckboxRef = forwardRef(Checkbox);

export default CheckboxRef;
