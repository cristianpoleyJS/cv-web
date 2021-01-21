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
              strings: ['Software Engineer', 'Senior Front-end Engineer', 'JavaScript Lover'],
              waitUntilVisible: true
            }}
          />
          <a href="https://storage.googleapis.com/cristian-poley-webs.appspot.com/CristianPoleyCV.pdf" target="_blank" rel="noreferrer">
            <button className="primary-button">
              Download CV
            </button>
          </a>
        </div>
        <div className="main-info__right">
          <img src="https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/avatar.jpg?alt=media&token=d547502c-7cfc-4d62-8b16-69e963e9e23e" />
        </div>
      </section>
      <style jsx>{`
        h1 {
          text-transform: uppercase;
          line-height: 100px;
          margin-bottom: 1rem;
        }

        button {
          margin-top: 1rem;
          text-transform: uppercase;
        }

        .main-info {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 80px;
          grid-auto-rows: minmax(100px, auto);
          align-items: center;
          margin-top: 2rem;
        }
        .main-info__right img {
          width: 400px;
          border: 12px solid #fff;
          border-radius: 6px;
          box-shadow: 0px 0px 2px 1px #f5f5f5;
          border-bottom-right-radius: 60px;
        }
      `}</style>
    </>
  )
}
