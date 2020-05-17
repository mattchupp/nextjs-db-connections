import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

export const siteTitle = 'Test Database Connection'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={styles.container}>
        { children }
      </div>
    </>
  )
}
