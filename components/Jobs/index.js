import { rem } from 'styles/utils'
import IngeniovaSystemsIcon from 'components/Icons/IngeniovaSystemsIcon'
import SngularIcon from 'components/Icons/SngularIcon'
import SopraSteriaIcon from 'components/Icons/SopraSteriaIcon'
import WellnessTelecomIcon from 'components/Icons/WellnessTelecomIcon'
import AbacumIcon from 'components/Icons/AbacumIcon'

export default function Jobs () {
  return (
    <>
      <section id="jobs">
        <span>
          <AbacumIcon
            fill="#b3b3b3"
            width={rem(140)}
            height={rem(40)}/>
        </span>
        <span>
          <SngularIcon
            fill="#b3b3b3"
            width={rem(128)}
            height={rem(40)}/>
        </span>
        <span>
          <IngeniovaSystemsIcon
            fill="#b3b3b3"
            width={rem(144)}
            height={rem(65)}/>
        </span>
        <span>
          <WellnessTelecomIcon
            fill="#b3b3b3"
            width={rem(200)}
            height={rem(40)}/>
        </span>
        <span>
          <SopraSteriaIcon
            fill="#b3b3b3"
            width={rem(200)}
            height={rem(40)}/>
        </span>
      </section>
      <style jsx>{`
          section {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: ${rem(10)};
            grid-auto-rows: minmax(${rem(60)}, auto);
            padding: 3rem 0;
            align-items: center;
          }
          span {
            text-align: center;
          }
          @media (max-width: ${rem(1024)}) {
            section {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: ${rem(640)}) {
            section {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}</style>
    </>
  )
}
