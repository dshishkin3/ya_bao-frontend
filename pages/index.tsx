import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetStaticProps } from "next";
import Head from "next/head";
import { IProduct } from "../app/components/shared/interfaces/product.interface";
import { useActions } from "../app/hooks/useActions";
import NextNProgress from "nextjs-progressbar";
import { fetchUser } from "../app/store/user/user.actions";

import Home from "../app/components/screens/home/Home";

const HomePage = ({ products }: { products: IProduct[] }) => {
  const dispatch = useDispatch();
  const { productsLoader } = useActions();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = String(localStorage.getItem("token"));
      dispatch(fetchUser(token));
      productsLoader(products);
    }
    console.log(process.env);

    return;
  }, []);

  return (
    <>
      <Head>
        <title>YA BAO - интернет магазин вкусной еды</title>
        <meta name="description" content="Главная страница" />
      </Head>
      <NextNProgress color="#ff2e65" />
      <Home />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(`${process.env.API}/products`);

  if (!res.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products: res.data },
  };
};

export default HomePage;
