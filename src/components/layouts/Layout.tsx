import Head from 'next/head'

import { Navbar } from 'components/ui'

import styles from 'styles/layouts/layout.module.scss'
interface LayoutProps {
  children: React.ReactNode
  title?: string
}

const host = (typeof window !== 'undefined' && window.location.origin) || ''

export const Layout = ({ children, title = 'Pokemon App' }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Benji" />
        <meta name="description" content="Project with react and nextjs" />
        <meta name="keywords" content="React, NextJs, TypeScript" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={`Information about ${title}`} />
        <meta property="og:image" content={`${host}/images/og.png`} />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  )
}
