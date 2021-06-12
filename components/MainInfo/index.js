import { rem } from 'styles/utils'
import TypeIt from 'typeit-react'

export default function MainInfo () {
  return (
    <>
      <section className="main-info">
        <div className="main-info__left">
          <h1>Cristian Poley</h1>
          <TypeIt
            element={'h3'}
            options={{
              breakLines: false,
              loop: true,
              nextStringDelay: 3000,
              speed: 60,
              startDelay: 500,
              strings: ['Senior Front-end', 'Software Engineer', 'JavaScript Lover'],
              waitUntilVisible: true
            }}
          />
          <a
            href="https://storage.googleapis.com/cristian-poley-webs.appspot.com/CristianPoleyCV.pdf"
            target="_blank"
            rel="noreferrer">
            <button className="primary-button">
              Descargar CV
            </button>
          </a>
        </div>
        <div className="main-info__right">
          <img src="https://storage.googleapis.com/cristian-poley-webs.appspot.com/iam.webp" decoding="async" loading="lazy" />
        </div>
      </section>
      <style jsx>{`
        h1 {
          text-transform: uppercase;
          line-height: ${rem(100)};
          margin-bottom: 1rem;
        }

        button {
          margin-top: 1rem;
          text-transform: uppercase;
        }

        .main-info {
          display: grid;
          grid-template-columns: calc(60% - 5rem) calc(40% - 5rem);
          grid-gap: ${rem(160)};
          grid-auto-rows: minmax(${rem(100)}, auto);
          align-items: center;
          margin-top: 2rem;
        }
        .main-info__right img {
          width: 100%;
          border: ${rem(12)} solid #fff;
          border-radius: ${rem(6)};
          box-shadow: 0 0 ${rem(2)} ${rem(4)} #f5f5f5;
          border-bottom-right-radius: ${rem(60)};
        }

        @media (max-width: ${rem(1024)}) {
          .main-info {
            display: inline-block;
          }
          h1 {
            font-size: calc(7.5rem - 4vh);
          }
          .main-info__right {
            display: none;
          }
        }
        @media (max-width: ${rem(768)}) {
          h1 {
            font-size: calc(5.5rem - 4vh);
            line-height: 4rem;
          }
          h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  )
}
