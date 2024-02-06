import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shawn Inder</title>
        <meta name="description" content="Software consultant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Shawn Inder</h1>
        <p>
          Coming soon…
        </p>
        <p>
          <a href="https://github.com/shawninder">View my GitHub profile</a>
        </p>
      </main>
    </>
  )
}
