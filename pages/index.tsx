import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { Container } from "../components";

const Home: NextPage = ({ desks }: any) => {
  console.log(desks);

  return (
    <>
      <Head>
        <title>Bolt Desk</title>
        <meta name="description" content="Your desk booking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {/* GRID */}
        <div className="grid grid-cols-[1fr] sm:grid-cols-[260px_1fr] mt-6">
          {/* GRID ITEM */}
          <div>
            {/* Desk card */}
            <div className="cursor-pointer bg-background shadow-md hover:scale-[1.03] transition-transform rounded-sm flex justify-between items-center py-2 px-3 mb-2">
              <p className="cursor-default">Desk 1</p>
              <div className="flex items-center">
                <p className="text-[14px] cursor-default">Availble</p>
                <div className="w-[8px] h-[8px] bg-green-600 ml-3 rounded-full mt-[2px]"></div>
              </div>
            </div>
            {/* Desk card */}
            <div className="cursor-pointer bg-background shadow-md hover:scale-[1.03] transition-transform rounded-sm flex justify-between items-center py-2 px-3 mb-2">
              <p className="cursor-default">Desk 1</p>
              <div className="flex items-center">
                <p className="text-[14px] cursor-default">Availble</p>
                <div className="w-[8px] h-[8px] bg-green-600 ml-3 rounded-full mt-[2px]"></div>
              </div>
            </div>
            {/* Desk card */}
            <div className="cursor-pointer bg-background shadow-md hover:scale-[1.03] transition-transform rounded-sm flex justify-between items-center py-2 px-3 mb-2">
              <p className="cursor-default">Desk 1</p>
              <div className="flex items-center">
                <p className="text-[14px] cursor-default">Availble</p>
                <div className="w-[8px] h-[8px] bg-green-600 ml-3 rounded-full mt-[2px]"></div>
              </div>
            </div>
            {/* Desk card */}
            <div className="cursor-pointer bg-background shadow-md hover:scale-[1.03] transition-transform rounded-sm flex justify-between items-center py-2 px-3 mb-2">
              <p className="cursor-default">Desk 1</p>
              <div className="flex items-center">
                <p className="text-[14px] cursor-default">Availble</p>
                <div className="w-[8px] h-[8px] bg-green-600 ml-3 rounded-full mt-[2px]"></div>
              </div>
            </div>
            {/* Desk card */}
            <div className="cursor-pointer bg-background shadow-md hover:scale-[1.03] transition-transform rounded-sm flex justify-between items-center py-2 px-3 mb-2">
              <p className="cursor-default">Desk 1</p>
              <div className="flex items-center">
                <p className="text-[14px] cursor-default">Availble</p>
                <div className="w-[8px] h-[8px] bg-green-600 ml-3 rounded-full mt-[2px]"></div>
              </div>
            </div>
          </div>
          {/* GRID ITEM */}
          <div className="bg-green-200"></div>
        </div>
      </Container>
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
