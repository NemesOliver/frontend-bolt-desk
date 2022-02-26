import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { Container, Desk, Paper, DatePicker, Chart } from "../components";

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
        <main className="grid grid-cols-[1fr] sm:grid-cols-[260px_1fr] mt-6">
          {/* GRID ITEM DESKS*/}
          <section>
            <Paper>
              Pick a date and hover over a desk to book it, or see who has
              currently booked it.
            </Paper>
            {desks.map((desk: any) => (
              <Desk
                key={desk._id}
                name={desk.name}
                isBooked={desk.is_booked}
                bookedBy={desk.booked_by}
              />
            ))}
          </section>
          {/* GRID ITEM SCREEN*/}
          <section className="ml-6">
            <DatePicker />
            <p className="mb-2 mt-6 ">Average amount of people in the office</p>
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
