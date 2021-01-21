import IngeniovaSystemsIcon from 'components/Icons/IngeniovaSystemsIcon'
import SngularIcon from 'components/Icons/SngularIcon'
import SopraSteriaIcon from 'components/Icons/SopraSteriaIcon'
import WellnessTelecomIcon from 'components/Icons/WellnessTelecomIcon'

export default function Jobs () {
  return (
    <>
      <section id="jobs">
          <SngularIcon fill="#b3b3b3" width="200px" height="40px"/>
          <IngeniovaSystemsIcon fill="#b3b3b3" width="200px" height="65px"/>
          <WellnessTelecomIcon fill="#b3b3b3" width="200px" height="40px"/>
          <SopraSteriaIcon fill="#b3b3b3" width="200px" height="40px"/>
      </section>
      <style jsx>{`
          section {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px;
            grid-auto-rows: minmax(100px, auto);
            padding: 3rem 0;
            align-items: center;
          }

          section svg {
            cursor: pointer;
          }
        `}</style>
    </>
  )
}
