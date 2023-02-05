import React, { useState } from "React";
import styles from "../../styles/searchOrder.module.css";
import { useRouter } from "next/router";

const Index = () => {
  const [inputs, setInputs] = useState("");
  const router = useRouter();

  //根據id搜尋訂單並導到該路由位置
  const handleSubmitOrder = async () => {
    if (inputs.length !== 0) {
      const res = await router.push(`/orders/${inputs}`);
      if (!res) {
        alert("無此訂單");
        window.location.href = "/";
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>請輸入您的訂單編號</h1>

        <input
          type="numbdr"
          name="inputs"
          className={styles.inputs}
          placeholder="請輸入您的訂單編號"
          required
          onChange={(e) => setInputs(e.target.value)}
        />
        <button onClick={handleSubmitOrder} className={styles.submitButton}>
          送出訂單
        </button>
      </div>
    </>
  );
};

export default Index;
