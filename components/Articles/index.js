import { rem } from 'styles/utils'

export default function Articles () {
  const articles = [
    {
      id: 2,
      title: 'Frontend en 2021',
      url: 'https://cristianpoley.medium.com/frontend-en-2021-acdc3f9889bc',
      description: '¿Tienes dudas sobre por dónde tirar este año?, ¡veamos que nos depara 2021!',
      photo: 'https://storage.googleapis.com/cristian-poley-webs.appspot.com/articles/frontend2021.png'
    },
    {
      id: 1,
      title: 'ECMAScript 2021',
      url: 'https://cristianpoley.medium.com/ecmascript-2021-17aaeb1d35c7',
      description: 'Novedades de lo que viene la nueva versión ECMAScript.',
      photo: 'https://storage.googleapis.com/cristian-poley-webs.appspot.com/articles/ecma2021.jpeg'
    },
    {
      id: 3,
      title: 'One Piece - Vue 3',
      url: 'https://octuweb.com/vue3/',
      description: '¿Con ganas de conocer que nos trae la nueva versión de Vue? En este artículo hacemos un repaso sobre ella.',
      photo: 'https://storage.googleapis.com/cristian-poley-webs.appspot.com/articles/vue3.png'
    },
    {
      id: 4,
      title: 'Angular vs React',
      url: 'https://cristianpoley.medium.com/angular-vs-react-e9221e26892d',
      description: 'En esta guía vamos a ver cada una de estas tecnologías Front y las diferencias entre ellas, para que puedas elegir la mejor opción para el desarrollo de tus aplicaciones Front-end con JavaScript.',
      photo: 'https://storage.googleapis.com/cristian-poley-webs.appspot.com/articles/angularvsreact.jpeg'
    }
  ]
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1000">
        <h2>Mis últimos artículos</h2>
        <div>
          {articles.map(({ id, url, title, description, photo }) => (
            <a
              key={id}
              className="article"
              href={url}
              target="_blank"
              rel="noreferrer">
              <div
                className="article__image"
                style={{ backgroundImage: `url(${photo})` }} />
              <div className="article__title">
                <span>{title}</span>
              </div>
              <div className="article__description">
                <span>{description}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <style jsx>{`
        section  {
          margin: 2rem 0;
        }
        h2 {
          margin-bottom: 1rem;
        }
        div {
          display: flex;
          flex-wrap: wrap;
        }
        .article * {
          color: var(--color--white);
          transition: var(--transition);
        }
        .article {
          padding: 0;
          display: inline-block;
          transform: scale(1);
        }
        .article:nth-child(1) {
          width: 60%;
          background-color: #0f0f0f;
        }
        .article:nth-child(2) {
          width: 40%;
          background-color: #51504f;
        }
        .article:nth-child(3) {
          width: 45%;
          background-color: #979797;
        }
        .article:nth-child(4) {
          width: 55%;
          background-color: #1b1a20;
        }
        .article:hover > .article__image {
          filter: none;
        }
        .article__image {
          height: ${rem(200)};
          background-position-x: center;
          background-size: cover;
          filter: grayscale(100%) contrast(1) brightness(90%);
        }
        .article__title {
          padding: 2.5vh 5% 0;
          font-size: ${rem(24)};
          font-weight: bold;
          margin: 1vh 0;
          word-wrap: break-word;
        }
        .article__title > span {
          display: inline-block;
          position: relative;
          z-index: 10;
        }
        .article__title > span:before {
          background: #f9ce21;
          bottom: 6%;
          content: '';
          height: ${rem(10)};
          position: absolute;
          left: 0;
          width: 100%;
          z-index: -1;
        }
        .article__description {
          padding: 2vh 5%;
          font-size: ${rem(18)};
          margin: 2vh 0;
          font-weight: bold;
          word-wrap: break-word;
        }

        @media (max-width: 768px) {
          .article {
            flex: 1 0 100%;
            width: 100%;
            margin-bottom: 1rem;
          }
        }
      `}
      </style>
    </>
  )
}
