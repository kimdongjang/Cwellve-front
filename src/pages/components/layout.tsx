import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Navbar from "./Navbar/navbar";

const name = "my name";
export const siteTitle = "Next.js sample web";



export default function RootLayout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: Boolean;
}) {
  return (
    <div className='layout'>
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
      <Navbar />
      <main>{children}</main>
      {!home && (
        <div className='backToHome'>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
