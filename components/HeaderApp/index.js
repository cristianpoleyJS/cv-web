import Links from 'components/Links'
import { rem } from 'styles/utils'

export default function HeaderApp () {
  return (
      <>
        <header>
          <Links />
        </header>
        <style jsx>{`
          @media (max-width: ${rem(1024)}) {
            header {
              padding-top: 2rem;
            }
          }
        `}
        </style>
      </>
  )
}
