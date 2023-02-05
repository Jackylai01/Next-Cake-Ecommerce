import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";
import { useRouter } from "next/router";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  //購物車沒商品防護機制與送出訂單
  const handleClick = () => {
    if (total !== 0) {
      createOrder({ customer, address, total, method: 0 });
    } else {
      window.alert("請選購商品");
      router.push("/");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>請填寫您的收貨地址</h1>
        <p>下單後請記得您的訂單編號，可於網站查詢製作進度</p>
        <div className={styles.item}>
          <label className={styles.label}>姓名</label>
          <input
            placeholder="John Doe"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
            required
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>手機</label>
          <input
            type="text"
            placeholder="+1 234 567 89"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>收貨地址</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
