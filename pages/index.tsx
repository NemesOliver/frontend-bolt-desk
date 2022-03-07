import type { NextPage, GetServerSideProps } from "next";
import { useContext, useEffect } from "react";
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
import { DateContext } from "../context";

const Home: NextPage = ({ desks, bookings }: any) => {
  const isDesktop = useMediaQuery("(min-width: 814px)");
  const { date } = useContext(DateContext);

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
              const filteredBookings = bookings.filter(
                (booking: any) => booking.date === date
              );

              return isDesktop ? (
                <Desk
                  key={desk._id}
                  id={desk._id}
                  name={desk.name}
                  filteredBookings={filteredBookings}
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

          {/* GRID ITEM SCREEN - hidden on small devices */}
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
    const desks = await backend.get("/desks", {
      headers: { Authorization: token }, // Must be set in header due to how SSR works or useSWR can be used instead
    });

    const bookings = await backend.get("/bookings");

    return { props: { desks: desks.data, bookings: bookings.data } };
  } catch (error) {
    return { props: {} };
  }
};
