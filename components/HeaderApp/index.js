import Links from 'components/Links'
import { rem } from 'styles/utils'

export default function HeaderApp () {
  return (
      <>
        <header>
          <Links />
          <span />
        </header>
        <style jsx>{`
        span {
            background-image: url(/wave-lines.png);
            background-repeat: no-repeat;
            background-size: cover;
            content: "";
            height: ${rem(300)};
            opacity: 0.15;
            position: absolute;
            right: 0;
            top: 0;
            width: ${rem(200)};
            z-index: -1;
          }
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
