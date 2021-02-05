import { rem } from 'styles/utils'

export default function Brief () {
  const briefs = [
    {
      id: 1,
      count: '2',
      title: 'Librerias'
    },
    {
      id: 2,
      count: '6',
      title: 'Artículos'
    },
    {
      id: 3,
      count: '7',
      title: 'Proyectos'
    },
    {
      id: 4,
      count: '+5',
      title: 'Años de experiencia'
    }
  ]
  return (
    <>
      <section data-aos="fade-up" data-aos-duration="1000">
        {briefs.map(({ id, count, title }) => (
          <div key={id}>
            <num>{count}</num>
            <span>
              {title}
            </span>
          </div>
        ))}
      </section>
      <style jsx>{`
        section {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(${rem(100)}, auto);
          align-items: center;
          max-width: ${rem(1024)};
          margin: 0 auto;
        }

        section div {
          text-align: center;
          padding: ${rem(26)} 0;
          height: ${rem(112)};
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
          font-size: ${rem(24)};
        }

        @media (max-width: 768px) {
          section div {
            padding-top: ${rem(14)};
          }
        }
      `}
      </style>
    </>
  )
}
