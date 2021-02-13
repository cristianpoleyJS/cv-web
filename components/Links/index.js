import { rem } from 'styles/utils'
import CPIcon from 'components/Icons/CPIcon'
import GithubIcon from 'components/Icons/GithubIcon'
import LinkedinIcon from 'components/Icons/LinkedinIcon'
import MediumIcon from 'components/Icons/MediumIcon'

export default function Links () {
  const goTo = (id) => {
    document.getElementById(id).scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
  return (
        <>
        <navbar>
            <CPIcon fill="#fd9a00" width={rem(50)}/>
            <div className="navbar__left">
              <a onClick={() => goTo('jobs')}>Trabajos</a>
              <a onClick={() => goTo('contact')}>Contacta</a>
            </div>
            <div className="navbar__right">
              <a
                href="https://www.linkedin.com/in/cristian-poley/"
                target="_blank"
                rel="noreferrer">
                  <LinkedinIcon fill="#fd9a00" width={rem(28)}/>
              </a>
              <a
                href="https://github.com/cristianpoleyJS"
                target="_blank"
                rel="noreferrer">
                  <GithubIcon fill="#fd9a00" width={rem(28)} opacity="0.8"/>
              </a>
              <a
                href="https://medium.com/@cristianpoley"
                target="_blank"
                rel="noreferrer">
                  <MediumIcon fill="#fd9a00" width={rem(28)} opacity="0.5"/>
              </a>
            </div>
        </navbar>
        <style jsx>{`
          navbar {
            display: grid;
            grid-template-columns: ${rem(50)} calc(100% - ${rem(200)}) ${rem(109)};
            grid-gap: ${rem(20)};
            grid-auto-rows: minmax(${rem(100)}, auto);
            align-items: center;
          }

          .navbar__left {
            text-align: left;
            padding-left: ${rem(60)};
          }

          .navbar__left a {
            margin-right: 3rem;
            font-size: ${rem(18)};
          }

          .navbar__right a {
            width: ${rem(28)};
            display: grid;
          }

          .navbar__left a:hover {
            color: var(--palette--weighted-border-color);
          }

          .navbar__right {
            text-align: right;
            display: grid;
            grid-template-columns: repeat(3, ${rem(30)});
            grid-gap: ${rem(8)};
          }

          @media (max-width: ${rem(1024)}) {
            navbar {
              display: inline-block;
              width: 100%;
            }
            .navbar__left {
              display: none;
            }
            .navbar__right {
              float: right;
            }
          }
        `}
        </style>
        </>
  )
}
