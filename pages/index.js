import { getDataAirtable } from 'utils'
import Articles from 'components/Articles'
import Brief from 'components/Brief'
import ContactUs from 'components/ContactUs'
import Jobs from 'components/Jobs'
import Libraries from 'components/Libraries'
import MainInfo from 'components/MainInfo'
import Portfolio from 'components/Portfolio'

const BASE_PORTFOLIO = 'appwLpTHNHw87M5Mc'
const TITLE_TABLE_PORTFOLIO = 'Portfolio'

const BASE_ARTICLES = 'appp9mpEjaGs4jv39'
const TITLE_TABLE_ARTICLES = 'Articles'

const BASE_LIBRARIES = 'appfff5XrWkjkHJET'
const TITLE_TABLE_LIBRARIES = 'Libraries'

const BASE_BRIEF = 'appLIDZ3cqhvo0OAA'
const TITLE_TABLE_BRIEF = 'Brief'

export async function getServerSideProps () {
  const promises = await Promise.all([
    getDataAirtable(BASE_BRIEF, TITLE_TABLE_BRIEF),
    getDataAirtable(BASE_PORTFOLIO, TITLE_TABLE_PORTFOLIO),
    getDataAirtable(BASE_LIBRARIES, TITLE_TABLE_LIBRARIES),
    getDataAirtable(BASE_ARTICLES, TITLE_TABLE_ARTICLES)
  ])
  const brief = promises[0]
  const projects = promises[1]
  const libraries = promises[2]
  const articles = promises[3]

  return {
    props: {
      brief,
      projects,
      libraries,
      articles
    }
  }
}

export default function Home (props) {
  return (
    <>
      <MainInfo />
      <Jobs />
      <Brief brief={props.brief}/>
      <Portfolio projects={props.projects} />
      <Libraries libraries={props.libraries}/>
      <Articles articles={props.articles}/>
      <ContactUs />
    </>
  )
}
