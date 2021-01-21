import LinkedinIcon from 'components/Icons/LinkedinIcon'
import MediumIcon from 'components/Icons/MediumIcon'
import GithubIcon from 'components/Icons/GithubIcon'
import CPIcon from 'components/Icons/CPIcon'

export default function Links () {
  return (
        <>
        <navbar>
            <CPIcon fill="#fd9a00" width="50px"/>
            <div className="navbar__left">
              <a href="#portfolio">Portfolio</a>
              <a href="#jobs">Jobs</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="navbar__right">
              <a href="https://www.linkedin.com/in/cristian-poley/" target="_blank" rel="noreferrer">
                <LinkedinIcon fill="#fd9a00" width="28px"/>
              </a>
              <a href="https://github.com/cristianpoleyJS" target="_blank" rel="noreferrer">
                <GithubIcon fill="#fd9a00" width="28px" opacity="0.8"/>
              </a>
              <a href="https://medium.com/@cristianpoley" target="_blank" rel="noreferrer">
                <MediumIcon fill="#fd9a00" width="28px" opacity="0.5"/>
              </a>
            </div>
        </navbar>
        <style jsx>{`
          navbar {
            display: grid;
            grid-template-columns: 50px calc(100% - 189px) 109px;
            grid-gap: 20px;
            grid-auto-rows: minmax(100px, auto);
            align-items: center;
          }

          .navbar__left {
            text-align: left;
            padding-left: 60px;
          }

          .navbar__left a {
            margin-right: 3rem;
            font-size: 18px;
          }

          .navbar__left a:hover {
            color: var(--palette--weighted-border-color);
          }

          .navbar__right {
            text-align: right;
            display: grid;
            grid-template-columns: repeat(3, 30px);
            grid-gap: 8px;
          }
        `}
        </style>
        </>
  )
}
