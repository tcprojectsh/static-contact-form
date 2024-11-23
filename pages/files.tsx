import cn from "clsx";
import Wrapper from "@/components/Wrapper";
import { TTCommons } from "@/utils/customFonts";
import Content from "@/configs/content.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const ttCommonsBold = `${TTCommons.variable} font-ttCommons font-bold`;

export default function Files() {
  const router = useRouter();
  const [validated, setValidated] = useState(false);
  const { files } = Content["staticTemplate"];

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("token") === process.env.NEXT_PUBLIC_FILE_TOKEN
    ) {
      setValidated(true);
    } else {
      setTimeout(() => router.push("/login"), 2000);
    }
  }, []);

  if (!validated) {
    return (
      <Wrapper>
        <header
          className={cn(ttCommonsBold, "uppercase text-xl text-[#69443C]")}
        >
          {files.header}
        </header>
        Please login to see these files ...
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <header className={cn(ttCommonsBold, "uppercase text-xl text-white")}>
        {files.header}
      </header>
      Files
    </Wrapper>
  );
}
