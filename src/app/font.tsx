import localFont from "next/font/local";

export const dmSans = localFont({
  src: [
    // Regular
    {
      path: "../../public/fonts/DM-Sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/DM-Sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },

    // Medium
    {
      path: "../../public/fonts/DM-Sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/DM-Sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },

    // SemiBold
    {
      path: "../../public/fonts/DM-Sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/DM-Sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },

    // Bold
    {
      path: "../../public/fonts/DM-Sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/DM-Sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },

    // ExtraBold
    {
      path: "../../public/fonts/DM-Sans/DMSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/DM-Sans/DMSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },

    // Black
    {
      path: "../../public/fonts/DM-Sans/DMSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/DM-Sans/DMSans-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    }
  ],
  variable: "--font-dm-sans",
  display: "swap",
})
