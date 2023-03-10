import styles from "../styles/Featured.module.css";
import Image from "next/legacy/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"];

  const hadleArrow = (direction) => {
    if (direction === "1") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.arrowContainer}
          style={{ left: 0 }}
          onClick={() => hadleArrow("1")}
        >
          <Image
            src="/img/arrowl.png"
            alt=""
            width={30}
            height={30}
            objectFit="contain"
          />
        </div>
        <div
          className={styles.wrapper}
          style={{ transform: `translateX(${-100 * index}vw)` }}
        >
          {images.map((img, i) => (
            <div className={styles.imgContainer} key={i}>
              <Image src={img} alt="" layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
        <div
          className={styles.arrowContainer}
          style={{ right: 0 }}
          onClick={() => hadleArrow("r")}
        >
          <Image
            src="/img/arrowr.png"
            alt=""
            width={30}
            height={30}
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default Featured;
