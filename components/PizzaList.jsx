import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>熱門商品</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          unde omnis sint assumenda eligendi repellendus corrupti modi maiores
          labore aperiam?
        </p>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PizzaList;
