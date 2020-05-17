import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'Test Database Connection'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div>
        { children }
      </div>
    </>
  )
}
