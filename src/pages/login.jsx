import React, { useState } from 'react';
import axios from 'axios'
import styles from '../styles/Login.module.css';
import { verifyUser } from './api/users';
import { useRouter } from "next/router";
import { useSession, signIn, getSession } from 'next-auth/react' ;
import Image from "next/image"
export default function login() {
  const { data: session} = useSession();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter(); 

  async function handleClick() {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Login</h1>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Login
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
        <button className={styles.btn} onClick={()=> signIn('google')}>
          <Image src="/img/google.png"  alt='' width='25px' height='25px'/>
          <p className={styles.placeholder}>Sign in with google</p>
        </button> 
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if(session){
    const data = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image
    }
    const user = await verifyUser(session.user.email)
    if(!user){
      try{
        await axios.post('http://localhost:3000/api/users', data)
      } catch(err){
        console.log(err)
      }
    }
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {
    }
  }
}