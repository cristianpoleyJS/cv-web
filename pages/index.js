import Articles from 'components/Articles'
import Brief from 'components/Brief'
import ContactUs from 'components/ContactUs'
import Jobs from 'components/Jobs'
import Libraries from 'components/Libraries'
import MainInfo from 'components/MainInfo'
// import Portfolio from 'components/Portfolio'

export default function Home () {
  return (
    <>
      <MainInfo />
      <Jobs />
      <Brief />
      {/* <Portfolio /> */}
      <Libraries />
      <Articles />
      <ContactUs />
    </>
  )
}
