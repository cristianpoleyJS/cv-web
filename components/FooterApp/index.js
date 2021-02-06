import Links from 'components/Links'

export default function FooterApp () {
  return (
    <>
      <footer
        data-aos="fade-up"
        data-aos-duration="1000">
        <hr/>
        <Links />
        <section>
          <div>
            {/* <a href="/politics-privacy">Politica de privacidad</a><br/> */}
            <strong>cristianpoleygonzalez@gmail.com</strong>
          </div>
          <div className="footer__right">
            2021 © Cristian Poley
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

        .footer__right {
          text-align: right;
        }
        @media (max-width: 768px) {
          section {
            display: inline-block;
            width: 100%;
          }
          .footer__right {
            text-align: left;
            margin-top: 1rem;
          }
          footer {
            padding-bottom: 3rem;
          }
        }
      `}
      </style>
    </>
  )
}
