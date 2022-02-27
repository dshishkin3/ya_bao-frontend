import React, { FC } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import Product from "./product/Product";

interface IFilterProductsProps {
  numElement: number;
}

const FilterProducts: FC<IFilterProductsProps> = ({ numElement }) => {
  const { category, products } = useTypedSelector((state) => state.product);

  const slice = products.slice(0, numElement);

  // категория - все продукты
  const allProducts = slice.map((product) => (
    <Product key={product._id} product={product} />
  ));

  // категория - ???
  const categoryProducts = products
    .filter((product) => product.type === category)
    .map((product) => <Product key={product._id} product={product} />);

  return <>{category === "Все" ? allProducts : categoryProducts}</>;
};

export default FilterProducts;
