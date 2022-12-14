import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router'

export default function Navbar () {

  const quantity = useSelector(state=>state.cart.quantity)

  function handleClick() {
    Router.push('/login')
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>88 9881715852</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="logo"  width="140px" height="100px"/> 
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="logo"  width="30px" height="30px"/>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div> 
      </Link>
      <div className={styles.item}> 
        <button className={styles.btnLogin} onClick={handleClick}>
          <p className={styles.placeholder}>Login</p>
        </button>
      </div>
    </div>
  )
}