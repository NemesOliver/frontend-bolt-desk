import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import {
  Container,
  Desk,
  DeskMobile,
  Paper,
  DatePicker,
  Chart,
} from "../components";
import { useMediaQuery } from "../hooks";

const Home: NextPage = ({ desks }: any) => {
  const isDesktop = useMediaQuery("(min-width: 814px)");

  console.log(isDesktop);

  return (
    <>
      <Head>
        <title>Bolt Desk</title>
        <meta name="description" content="Your desk booking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {/* GRID */}
        <main className="grid grid-cols-[1fr] sm:grid-cols-[260px_1fr] mt-6 h-[calc(100vh-70px)] ">
          {/* GRID ITEM DESKS*/}

          <section className="max-h-[calc(100vh-60px)] ">
            {isDesktop && (
              <Paper>
                <p className="text-[18px]">
                  Pick a date and hover over a desk to book it, or see who has
                  currently booked it.
                </p>
              </Paper>
            )}

            {/* Date picker on mobile */}
            {!isDesktop && (
              <div className="mb-2">
                <DatePicker />
              </div>
            )}

            {/* Render desks */}
            {desks.map((desk: any) => {
              return isDesktop ? (
                <Desk
                  key={desk._id}
                  name={desk.name}
                  isBooked={desk.is_booked}
                  bookedBy={desk.booked_by}
                />
              ) : (
                <DeskMobile
                  key={desk._id}
                  name={desk.name}
                  isBooked={desk.is_booked}
                  bookedBy={desk.booked_by}
                />
              );
            })}
          </section>

          {/* GRID ITEM SCREEN - hidden on small devices*/}
          <section className="ml-6 hidden sm:block">
            <DatePicker />
            <p className="mb-2 mt-6 text-[18px]">
              Average amount of people in the office
            </p>
            <Paper>
              <Chart />
            </Paper>
          </section>
        </main>
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
