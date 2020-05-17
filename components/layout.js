import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'Test Database Connection'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      { children }

    </div>
  )
}
