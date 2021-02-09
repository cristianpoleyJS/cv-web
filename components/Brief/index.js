import { getDataAirtable } from 'utils'
import { rem } from 'styles/utils'
import { useState, useEffect } from 'react'

const BASE_BRIEF = 'appLIDZ3cqhvo0OAA'
const TITLE_TABLE = 'Brief'

export default function Brief () {
  const [brief, setBrief] = useState([])

  useEffect(async () => {
    const brief = await getDataAirtable(BASE_BRIEF, TITLE_TABLE)
    setBrief(brief)
  }, [])
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1000">
        {brief.map(({ id, count, title }) => (
          <div key={id}>
            <span className="number">{count}</span>
            <span className="title">
              {title}
            </span>
          </div>
        ))}
      </section>
      <style jsx>{`
        section {
          display: grid;
          align-items: center;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(${rem(100)}, auto);
          max-width: ${rem(1024)};
          margin: 0 auto;
        }

        section div {
          text-align: center;
          padding: 2rem 0 ${rem(40)} 0;
          height: ${rem(150)};
          background-color: var(--palette--secondary-background-color);
        }
        section div:last-child {
          background-color: var(--palette--main-background-color);
        }

        section div * {
          color: var(--color--white);
        }

        div span.number {
          display: block;
          font-weight: 600;
          font-size: ${rem(28)};
        }
        section div span.title {
          font-size: ${rem(18)};
        }

        @media (max-width: ${rem(640)}) {
          section {
            display: block;
          }
          section div {
            padding-top: ${rem(14)};
            padding-bottom: 0 !important;
            height: 7rem;
          }
        }
      `}
      </style>
    </>
  )
}
