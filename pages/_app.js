import Head from 'next/head'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Cristian Poley</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }
      `}
      </style>
    </>
  )
}
