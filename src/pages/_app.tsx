import "../styles/_global.scss";

import { AppProps } from "next/app";
// import { ThemeProvider, PaletteMode } from "@mui/material";
import { ThemeProvider } from "../../src/components/Provider/theme-provider" //test

import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

import createEmotionCache from "../utils/createEmotionCache";
import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useTheme, createTheme } from "@mui/material/styles";
import { wrapper } from "../store/store";
import { lightTheme, darkTheme } from "../utils/theme";
import { useAppSelector } from "../hooks/reduxHook";

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

  const theme: any = useMemo(() => {
    switch (themeScheme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
    }
  }, [themeScheme]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {/* <ThemeProvider theme={theme}> */}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </ThemeProvider> */}
    </CacheProvider>
  );
};

export default wrapper.withRedux(App);
