import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { getCookie } from "cookies-next";
import {
  Container,
  Desk,
  DeskMobile,
  Paper,
  DatePicker,
  Chart,
  Backdrop,
} from "../components";
import { useMediaQuery } from "../hooks";
import { backend, withAuth } from "../libs";

const Home: NextPage = ({ desks }: any) => {
  const isDesktop = useMediaQuery("(min-width: 814px)");

  if (!desks) {
    return <Backdrop />;
  }

  return (
    <>
      <Head>
        <title>Bolt Desk - Dashboard</title>
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

export default withAuth(Home);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie("jwt", { req, res });

  try {
    const { data } = await backend.get("/desks", {
      headers: { Authorization: token }, // Must be set in header due to how SSR works or useSWR can be used instead
    });

    return { props: { desks: data } };
  } catch (error) {
    return { props: {} };
  }
};
