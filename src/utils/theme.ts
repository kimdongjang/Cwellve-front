import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Theme } from "@emotion/react";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const lightPalette: Theme = {
  // 밝은 모드 테마의 palette 설정
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

const darkPalette: Theme = {
  // 다크 모드 테마의 palette 설정
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#4caf50",
    },
    error: {
      main: red.A400,
    },
    mode: "dark",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

export const lightTheme = createTheme(lightPalette);

export const darkTheme = createTheme(darkPalette);

// // Create a theme instance.
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#556cd6",
//     },
//     secondary: {
//       main: "#19857b",
//     },
//     error: {
//       main: red.A400,
//     },
//   },
//   typography: {
//     fontFamily: roboto.style.fontFamily,
//   },
// });

// export default theme;
