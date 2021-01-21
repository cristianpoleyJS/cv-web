import Links from 'components/Links'

export default function FooterApp () {
  return (
    <>
      <footer>
        <hr/>
        <Links />
        <section>
          <div>
            <a href="/politics-privacy">Politica de privacidad</a><br/>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=cristianpoleygonzalez@gmail.com&tf=1" target="_blank" rel="noreferrer">
              <strong>cristianpoleygonzalez@gmail.com</strong>
            </a>
          </div>
          <div>
            2021 ® Cristian Poley<br/>
            All rights reserved
          </div>
        </section>
      </footer>
      <style jsx> {`
        footer {
          padding-bottom: 3rem;
        }
        footer hr {
          border: 1px solid var(--palette--weighted-border-color);
          opacity: 0.5;
          margin: 2rem 0;
        }
        section {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}
      </style>
    </>
  )
}
