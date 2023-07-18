import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import { MyAppProps } from "./_app";
import { AppType } from "next/app";
import createEmotionCache from "../utils/createEmotionCache";

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

// 서버 사이드 랜더링에 관여하는 로직 혹은 정적인 페이지를 로드하는데
// 사용되는 로직을 추가하는데 사용한다
export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createEmotionCache(); // 캐시된 객체 정의
  // 서버사이드 렌더링 시 할당된 스타일 객체를 오브젝트 객체에 입히기
  const { extractCriticalToChunks } = createEmotionServer(cache);
  const originalRenderPage = ctx.renderPage;
  // const materialSheets = new ServerStyleSheets(); // mui용 스타일 시트

  ctx.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (
        App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>
      ) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });
  };

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
