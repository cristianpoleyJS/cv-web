import 'styles/fonts.css'
import 'styles/styleCarousel.css'
import 'aos/dist/aos.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useEffect } from 'react'
import AOS from 'aos'
import AppLayout from 'components/AppLayout'
import globalStyles from 'styles'

export default function App ({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true
    })
  }, [])
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
