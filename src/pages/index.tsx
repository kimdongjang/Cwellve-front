import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";

import RootLayout, { siteTitle } from "./_rootLayout";
import { getSortedPostsData } from "../lib/posts";
import Button from "@mui/material/Button";

import MainSection from '../../public/images/MainSection.svg';

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
    <RootLayout home>
      <Head>
        {/* 웹 페이지 이름 */}
        <title>{siteTitle}</title>
      </Head>
      <div className="homeWrap">
        <div className="leftnav">

        </div>
        <div className="mainWrap">
          <section className="navWrap">
          </section>
          <section className='threadWrap'>
          </section>
        </div>
      </div>
    </RootLayout>
  );
}
