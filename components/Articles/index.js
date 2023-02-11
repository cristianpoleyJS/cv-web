import stylesSections from 'styles/sections'
import { rem } from 'styles/utils'

export default function Articles ({ articles }) {
  return (
    <>
      <section data-aos="fade-up" data-aos-duration="1000">
        <h2>My latest articles</h2>
        <div>
          {articles.map(({ id, url, title, description, photo }) => (
            <a
              key={id}
              className="article"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="article__image"
                style={{ backgroundImage: `url(${photo})` }}
              />
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
      <style jsx>{stylesSections}</style>
      <style jsx>
        {`
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
            content: "";
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

          @media (max-width: ${rem(768)}) {
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
