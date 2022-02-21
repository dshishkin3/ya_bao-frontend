import React, { FC } from "react";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import Button from "../../../UI/button/Button";
import Auth from "../auth/Auth";
import Cart from "../cart/Cart";

import styles from "./Menu.module.scss";

const categories = [
  { id: 1, title: "Все", name: "Все" },
  { id: 2, title: "Пиццы", name: "pizza" },
  { id: 3, title: "Комбо", name: "combo" },
  { id: 4, title: "Закуски", name: "snack" },
  { id: 5, title: "Десерты", name: "sweet" },
];

const Menu: FC = () => {
  const { isCartPopup, products } = useTypedSelector((state) => state.cart);
  const { category } = useTypedSelector((state) => state.product);
  const { user } = useTypedSelector((state) => state.user);

  const { openCartPopup, closeCartPopup, selectCategory } = useActions();

  const setPopup = () => {
    !isCartPopup ? openCartPopup() : closeCartPopup();
  };

  return (
    <div className={styles.container}>
      <ul className={styles.categories}>
        {categories.map(({ id, title, name }) => (
          <li
            key={id}
            onClick={() => selectCategory({ category: name })}
            style={{ color: category === name ? "#FF2E65" : "" }}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        {user !== null ? (
          <Link href="/profile">
            <a className={styles.profile}>
              {" "}
              <ExternalLinkIcon /> Мой профиль
            </a>
          </Link>
        ) : (
          <Auth />
        )}
        <Button w={160} h={42} br={8} onClick={setPopup}>
          Корзина | {products.length}
        </Button>
        <Cart />
      </div>
    </div>
  );
};

export default Menu;
