import styles from "../styles/Navbar.module.css";
import Image from "next/legacy/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <ul className={styles.list}>
            <Link href="/" passHref>
              <h3>JACKY.</h3>
            </Link>
            <Link href="/searchOrder" passHref>
              <li className={styles.listItem}>查詢訂單</li>
            </Link>
            <li className={styles.listItem}>商品一覽</li>
            <li className={styles.listItem}>最新資訊</li>
            <li className={styles.listItem}>聯繫方式</li>
          </ul>
        </div>
        <Link href="/cart" passHref>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="" width={30} height={30} />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
