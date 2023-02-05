import Image from "next/legacy/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/4.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>更多精選甜點，請關注我們粉絲專頁</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>工作室據點</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> Taiwan, 85022
            <br /> (886) 0000-0000
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> Taiwan, 85022
            <br /> (886) 0000-0000
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> Taiwan, 85022
            <br /> (886) 0000-0000
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> Taiwan, 85022
            <br /> (886) 0000-0000
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>營業時間</h1>
          <p className={styles.text}>
            星期一 - 星期五
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            星期六 - 星期日
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
