export default function Brief () {
  return (
    <>
      <section>
          <div>
            <num>2</num>
            <span>
              Librerias
            </span>
          </div>
          <div>
            <num>5</num>
            <span>
              Artículos
            </span>
          </div>
          <div>
            <num>7</num>
            <span>
              Proyectos
            </span>
          </div>
          <div>
            <num>+5</num>
            <span>
              Años de experiencia
            </span>
          </div>
      </section>
      <style jsx>{`
        section {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(100px, auto);
          align-items: center;
          max-width: 1024px;
          margin: 0 auto;
        }

        section div {
          text-align: center;
          padding: 26px 0;
          background-color: var(--palette--secondary-background-color);
        }
        section div:last-child {
          background-color: var(--palette--main-background-color);
        }

        section div * {
          color: var(--color--white);
        }

        div num {
          display: block;
          font-weight: 600;
          font-size: 24px;
        }

      `}
      </style>
    </>
  )
}
