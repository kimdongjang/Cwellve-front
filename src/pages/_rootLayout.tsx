import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Header from "../components/Header";
import { useTheme } from "next-themes"

const name = "my name";
export const siteTitle = "Cwellve";



export default function RootLayout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: Boolean;
}) {
  // systme,light | dark
  const { setTheme, theme } = useTheme()
  console.log(theme)

  return (
    <div className='rootLayout'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn hot to build a personal website using next.js"
        />

        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      {!home && (
        <div className='backToHome'>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
