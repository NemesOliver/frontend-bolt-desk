import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bolt Desk</title>
        <meta name="description" content="Your desk booking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;

export async function getServerSideProps(ctx: any) {
  const token = ctx.req.headers.cookie;

  try {
    const { data } = await axios.get("http://localhost:5000/v1/desks", {
      withCredentials: true,
      headers: { Authorization: token.substring(4) }, // Must be set in header due to how SSR works or useSWR can be used instead
    });

    return { props: { desks: data } };
  } catch (error) {
    return { props: {} };
  }
}
