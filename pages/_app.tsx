import "../styles/_globals.css";
import { AppProps } from "next/app";
import { ThemeProvider, PaletteMode } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

import createEmotionCache from "../utils/createEmotionCache";
import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useTheme, createTheme } from "@mui/material/styles";
import { wrapper } from "./../store/store";
import { useAppSelector } from "../hooks/reduxHook";
import { lightTheme, darkTheme } from "../styles/theme";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const themeScheme = useAppSelector((state) => state.themeStore.theme);

  const prefersDarkMode = useMediaQuery(
    `(prefers-color-scheme: ${themeScheme})`
  );

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode: prefersDarkMode ? "dark" : "light",
  //       },
  //     }),
  //   [prefersDarkMode]
  // );

  const theme = useMemo(() => {
    console.log(themeScheme);
    switch (themeScheme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
    }
  }, [themeScheme]);

  //   const [theme, setTheme] = useRecoilState(themeStore);
  //   const defaultTheme = useTheme();
  //   useEffect(() => {
  //     setTheme(defaultTheme.palette.mode);
  //   }, []);

  //   const isDarkMode = true; // 다크 모드 설정 여부를 가져오는 로직
  //   const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default wrapper.withRedux(App);
