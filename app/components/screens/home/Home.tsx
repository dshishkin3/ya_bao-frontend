import React, { FC, useEffect } from "react";
import { useActions } from "../../../hooks/useActions";

import SliderBlock from "./slider/Slider";
import Novelty from "./novelty/Novelty";
import Menu from "./menu/Menu";
import Map from "./map/Map";
import Products from "./products/Products";
import ProductPopup from "../../UI/productPopup/ProductPopup";

const Home: FC = () => {
  const { closeCartPopup } = useActions();

  useEffect(() => {
    closeCartPopup();
  }, []);

  return (
    <div>
      <Menu />
      <SliderBlock />
      <Novelty />
      <Products />
      <Map />

      {/* popups */}

      <ProductPopup />
    </div>
  );
};

export default Home;
