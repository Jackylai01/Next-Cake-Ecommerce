import Head from "next/head";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";
import PizzaList from "../components/PizzaList";
import axios from "axios";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

//不能打錯字，這是屬於SSR渲染機制 在使用者進入網頁時，每一次發送請求伺服器都會抓取資料
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
