import FooterApp from 'components/FooterApp'
import Head from 'next/head'
import HeaderApp from 'components/HeaderApp'
import { rem } from 'styles/utils'

export default function AppLayout ({ children }) {
  return (
    <>
      <main>
        <Head>
            <title>Cristian Poley</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, user-scalable=no"/>
        </Head>
        <HeaderApp />
          {children}
        <FooterApp />
      </main>
      <style jsx>{`
        main {
          height: 100vh;
          max-width: var(--xl2);
          padding: 0 ${rem(160)};
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          main {
            padding: 0 ${rem(40)};
          }
        }
        @media (max-width: 768px) {
          main {
            padding: 0 ${rem(24)};
          }
        }
      `}</style>
    </>
  )
}
