import localFont from "next/font/local";

const TTCommons = localFont({
  src: [
    {
      path: "../public/assets/fonts/tt-commons/tt-commons-light.otf",
      weight: "100",
      style: "light",
    },
    {
      path: "../public/assets/fonts/tt-commons/tt-commons-bold.otf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-tt-commons",
});

const MagnoliaScript = localFont({
  src: [
    {
      path: "../public/assets/fonts/magnolia-script.otf",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-magnolia",
});

const HeadingNow = localFont({
  src: [
    {
      path: "../public/assets/fonts/heading-now-regular.ttf",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-heading-now",
});

const TTRamillas = localFont({
  src: [
    {
      path: "../public/assets/fonts/tt-ramillas/tt-ramillas-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/tt-ramillas/tt-ramillas-regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/assets/fonts/tt-ramillas/tt-ramillas-light.ttf",
      weight: "200",
      style: "light",
    },
  ],
  variable: "--font-tt-ramillas",
});

export { TTCommons, HeadingNow, TTRamillas, MagnoliaScript };
