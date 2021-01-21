import 'styles/fonts.css'
import globalStyles from 'styles'
import AppLayout from 'components/AppLayout'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}
