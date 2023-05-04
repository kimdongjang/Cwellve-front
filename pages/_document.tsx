import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import { ServerStyleSheets } from "@mui/styles";

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App) => (props) =>
        materialSheets.collect(<App {...props} />),
    });
  };

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>,
  };
};
