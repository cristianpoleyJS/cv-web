import DownloadIcon from 'components/Icons/DownloadIcon'
import CodeIcon from 'components/Icons/CodeIcon'
import { rem } from 'styles/utils'

export default function Libraries () {
  const libraries = [
    {
      id: 1,
      description: '¡Con este componente 🧰 puedes agregar una línea de tiempo a su aplicación Vue3 para indicar sus objetivos logrados!',
      url: 'https://www.npmjs.com/package/vue-next-timeline',
      tech: 'JavaScript',
      title: 'vue-next-timeline',
      count: '+1k'
    },
    {
      id: 2,
      description: '🔍 Busca y elige entre los resultados del endpoint que le indiques al componente.',
      url: 'https://www.npmjs.com/package/vue-next-typeahead',
      tech: 'JavaScript',
      title: 'vue-next-typeahead',
      count: '+400'
    }
  ]
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1000">
        <h2>Mis últimas librerías</h2>
        <div>
          {libraries.map(({ id, url, title, description, tech, count }) => (
            <a
              key={id}
              className="library"
              href={url}
              rel="noreferrer"
              target="_blank">
              <div className="library__title">
                <span className="library__info__downloads__image">
                  <CodeIcon
                    width="22px"
                    height="22px"
                    fill="white" />
                </span> {title}
              </div>
              <div className="library__description">
                {description}
              </div>
              <div className="library__info">
                <span>{tech}:</span>
                <span className="library__info__downloads">
                  {count} <span className="library__info__downloads__image"><DownloadIcon width="12px" height="11px" fill="white" /></span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <style jsx>{`
        section {
          padding: 2rem 0;
        }
        h2 {
          margin-bottom: 1rem;
        }
        section > div {
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(auto-fill, minmax(${rem(300)}, 1fr));
        }
        .library {
          width: 100%;
          padding: 2.5vh 5%;
          display: inline-block;
          border-radius: ${rem(5)};
          border: 1px solid rgb(0, 0, 0, 0.08);
          box-shadow: 0 0 0 rgb(0, 0, 0, 0);
          transition: var(--transition);
          transform: scale(1);
          background-color: var(--palette--main-text-color);
          cursor: pointer;
        }
        .library :hover {
          transform: translateY(-5px);
        }
        .library * {
          color: var(--color--white);
        }
        .library__title {
          font-size: ${rem(24)};
          font-weight: bold;
          margin: 1vh 0;
          padding: 0 ${rem(1)};
          word-wrap: break-word;
          margin: 0;
        }
        .library__description {
          font-size: ${rem(16)};
          margin: 2vh 0;
          font-weight: bold;
          word-wrap: break-word;
          font-weight: 500;
        }
        .library__info {
          margin: 1vh 0;
          font-size: ${rem(14)};
          word-wrap: break-word;
        }
        .library__info__downloads {
          margin-left: ${rem(14)};
        }
        .library__info__downloads__image {
          vertical-align: middle;
          margin-right: ${rem(6)};
        }
      `}
      </style>
    </>
  )
}
