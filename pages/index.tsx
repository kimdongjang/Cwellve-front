import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";

import Layout, { siteTitle } from "./components/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from "../utils/date";
import Button from "@mui/material/Button";
import utilStyles from "../styles/utils.module.css";
import indexStyles from "./index.module.css";

import MainSection from '../public/images/MainSection.svg';

// 이 함수가 반환되면 아래에 Home 함수에 props가 전달된다.
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

// 메인 진입점
export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        {/* 웹 페이지 이름 */}
        <title>{siteTitle}</title>
      </Head>
      <div>
        <MainSection className={indexStyles.mainBackgroundSvg} width={"100%"} height={"100%"} />
      </div>
      <section className={`${utilStyles.headingMd}`}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
