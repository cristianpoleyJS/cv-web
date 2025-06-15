import { getData } from 'utils'
import Articles from 'components/Articles'
import Brief from 'components/Brief'
import ContactUs from 'components/ContactUs'
import Jobs from 'components/Jobs'
import Libraries from 'components/Libraries'
import MainInfo from 'components/MainInfo'
import Portfolio from 'components/Portfolio'

export async function getServerSideProps () {
  const [projects, brief, libraries, articles] = await Promise.all([
    getData('portfolio'),
    getData('brief'),
    getData('libraries'),
    getData('articles')
  ])

  return {
    props: {
      brief,
      projects,
      libraries,
      articles
    }
  }
}

export default function Home ({ brief, projects, libraries, articles }) {
  return (
    <>
      <MainInfo />
      <Jobs />
      <Brief brief={brief}/>
      <Portfolio projects={projects} />
      <Libraries libraries={libraries}/>
      <Articles articles={articles}/>
      <ContactUs />
    </>
  )
}
