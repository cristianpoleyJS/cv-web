import { getDataAirtable } from 'utils'
import { useState, useEffect } from 'react'
import Articles from 'components/Articles'
import Brief from 'components/Brief'
import ContactUs from 'components/ContactUs'
import Jobs from 'components/Jobs'
import Libraries from 'components/Libraries'
import MainInfo from 'components/MainInfo'
import Spinner from 'components/Spinner'

const BASE_ARTICLES = 'appp9mpEjaGs4jv39'
const TITLE_TABLE_ARTICLES = 'Articles'

const BASE_LIBRARIES = 'appfff5XrWkjkHJET'
const TITLE_TABLE_LIBRARIES = 'Libraries'

const BASE_BRIEF = 'appLIDZ3cqhvo0OAA'
const TITLE_TABLE_BRIEF = 'Brief'

export default function Home () {
  const [brief, setBrief] = useState([])
  const [libraries, setLibraries] = useState([])
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const promises = await Promise.all([
      getDataAirtable(BASE_BRIEF, TITLE_TABLE_BRIEF),
      getDataAirtable(BASE_LIBRARIES, TITLE_TABLE_LIBRARIES),
      getDataAirtable(BASE_ARTICLES, TITLE_TABLE_ARTICLES)
    ])
    setBrief(promises[0])
    setLibraries(promises[1])
    setArticles(promises[2])
    setLoading(false)
  }, [])

  return (
    <>
      <MainInfo />
      <Jobs />
      { loading
        ? <Spinner/>
        : <>
            <Brief brief={brief}/>
            <Libraries libraries={libraries}/>
            <Articles articles={articles}/>
          </>
      }
      <ContactUs />
    </>
  )
}
