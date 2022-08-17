import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/products/${pizza.id}`} passHref>
        <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.price[0]}</span>
      <p className={styles.desc}>{pizza.descr}</p>
    </div>
  );
};

export default PizzaCard;
