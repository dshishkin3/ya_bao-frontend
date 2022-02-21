import Image from "next/image";
import React, { FC, useState } from "react";
import { useActions } from "../../../../hooks/useActions";
import { IExtension } from "../../../shared/interfaces/product.interface";

import styles from "./Extensions.module.scss";

import ext1 from "/public/home/cart/extension_1.svg";
import ext2 from "/public/home/cart/extension_2.svg";
import ext3 from "/public/home/cart/extension_3.svg";

const Extensions: FC = () => {
  const [myExtension, setMyExtension] = useState({} as IExtension);

  const { addExtension } = useActions();

  const newExtenstion = (extension: IExtension) => {
    setMyExtension(extension);
    addExtension(extension);
  };

  return (
    <div className={styles.container}>
      {extensionsItems.map((extension) => (
        <div
          className={styles.extension}
          key={extension._id}
          onClick={() => newExtenstion(extension)}
          style={{
            border:
              extension !== myExtension
                ? "2px solid #e2e2e9"
                : "2px solid #FF2E65",
          }}
        >
          <Image src={extension.urlImg} alt="" width={70} height={70} />
          <p className={styles.title}>{extension.title}</p>
          <p className={styles.price}>от {extension.price} ₽</p>
        </div>
      ))}
    </div>
  );
};

export default Extensions;

const extensionsItems = [
  { _id: "1", title: "Острый халапенью", price: 120, urlImg: ext1 },
  { _id: "2", title: "Чесночный сыр", price: 100, urlImg: ext2 },
  { _id: "3", title: "Зеленый перец", price: 80, urlImg: ext3 },
];
