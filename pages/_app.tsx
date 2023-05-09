import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider, PaletteMode } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

import createEmotionCache from "../util/createEmotionCache";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme, createTheme } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import Top from "./components/layout/top";
import { themeStore } from "../store/themeStore";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  console.log(prefersDarkMode);

  //   const theme = useTheme();
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  //   const [theme, setTheme] = useRecoilState(themeStore);
  //   const defaultTheme = useTheme();
  //   useEffect(() => {
  //     setTheme(defaultTheme.palette.mode);
  //   }, []);

  //   const isDarkMode = true; // 다크 모드 설정 여부를 가져오는 로직
  //   const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <CacheProvider value={emotionCache}>
      <RecoilRoot>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Top />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </CacheProvider>
  );
};

export default App;
