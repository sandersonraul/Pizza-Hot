import React from 'react';
import styles from '../styles/Login.module.css';
import { useSession, signIn, signOut } from 'next-auth/react' 
import Image from "next/image"
export default function login() {
  const { data: session} = useSession();

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
    <h1 className={styles.title}>Login</h1>
      <input
        placeholder="username"
        className={styles.input}
        
      />
      <input
        placeholder="password"
        type="password"
        className={styles.input}
        
      />
      <button className={styles.button}>
        Sign In
      </button>
      <button className={styles.btn} onClick={()=> signIn('google')}>
        <Image src="/img/google.png"  alt='' width='25px' height='25px'/>
        <p className={styles.placeholder}>Sign in with google</p>
      </button>

    </div>
  </div>
  );
}