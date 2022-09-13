import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Next - Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={styles.main}>        
        <div className={styles.user}>
            {loading && <div className={styles.title}>Loading...</div>}
            {
            session &&
              <>
                <p className={styles.title}>Welcome, {session.user.name ?? session.user.email}!</p>
                <p style={{ marginBottom: '10px' }}> </p> <br />
              </>
            }
            {
            !session &&
              <>
                <p className={styles.title}>Please log in</p>
              </>
            }
          </div>
      </main>
    </div>
  )
}