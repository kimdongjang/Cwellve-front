import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import RootLayout from "../components/layout";
import Date from "../../utils/date";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <RootLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className='headingXl'>{postData.title}</h1>
        <div className='utilStyles'>
          {/* <Date dateString={postData.date} /> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </RootLayout>
  );
}

/** posts 폴더에 있는 모든 포스트의 id를 가져오고 paths를 반환해서 페이지를 생성 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();

  // Fallback: paths에서 리턴되지 않은 경로에 대해 false일 경우에는 404를 전달함.
  return {
    paths,
    fallback: false,
  };
};

/** 빌드시 데이터를 패치하는 함수 props를 반환. */
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
