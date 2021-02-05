import { rem } from 'styles/utils'
import IngeniovaSystemsIcon from 'components/Icons/IngeniovaSystemsIcon'
import SngularIcon from 'components/Icons/SngularIcon'
import SopraSteriaIcon from 'components/Icons/SopraSteriaIcon'
import WellnessTelecomIcon from 'components/Icons/WellnessTelecomIcon'

export default function Jobs () {
  return (
    <>
      <section id="jobs">
        <span>
          <SngularIcon
            fill="#b3b3b3"
            width="128px"
            height="40px"/>
        </span>
        <span>
          <IngeniovaSystemsIcon
            fill="#b3b3b3"
            width="144px"
            height="65px"/>
        </span>
        <span>
          <WellnessTelecomIcon
            fill="#b3b3b3"
            width="200px"
            height="40px"/>
        </span>
        <span>
          <SopraSteriaIcon
            fill="#b3b3b3"
            width="200px"
            height="40px"/>
        </span>
      </section>
      <style jsx>{`
          section {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: ${rem(10)};
            grid-auto-rows: minmax(${rem(100)}, auto);
            padding: 3rem 0;
            align-items: center;
          }
          span {
            text-align: center;
          }
          @media (max-width: 1024px) {
            section {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 640px) {
            section {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}</style>
    </>
  )
}
