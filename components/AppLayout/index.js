import FooterApp from 'components/FooterApp'
import Head from 'next/head'
import HeaderApp from 'components/HeaderApp'

export default function AppLayout ({ children }) {
  return (
    <>
      <main>
        <Head>
            <title>Cristian Poley</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderApp />
          {children}
        <FooterApp />
      </main>
      <style jsx>{`
        main {
          height: 100vh;
          max-width: var(--xl2);
          padding: 0 160px;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}
