export default function Articles () {
  return (
    <div>
      <h2>Let's see my latests articles</h2>
      <section>
        <article className="article">
          <div className="article__title">
            vue-next-typeahead
          </div>
          <div className="article__description">
            <span>
              personal website + blog  for every github user
            </span>
          </div>
          <div className="article__info">
            <span>JavaScript</span>
            <span>Descargas: +1k</span>
          </div>
        </article>
      </section>
      <style jsx>{`
        section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .article {
          width: 100%;
          padding: 2.5vh 5%;
          margin: 1vh 0px;
          display: inline-block;
          border-radius: 5px;
          border: 1px solid rgb(0, 0, 0, 0.08);
          box-shadow: 0px 0px 0px rgb(0, 0, 0, 0);
          transition: 0.4s ease-in-out;
          transform: scale(1);
          background-color: var(--palette--main-text-color);
        }
        .article * {
          color: var(--color--white);
        }
        .article__title {
          font-size: 24px;
          font-weight: bold;
          margin: 1vh 0px;
          padding: 0px 1px;
          word-wrap: break-word;
        }
        .article__description {
          font-size: 18px;
          margin: 2vh 0px;
          font-weight: bold;
          word-wrap: break-word;
        }
        .article__info {
          margin: 1vh 0px;
          font-size: 14px;
          word-wrap: break-word;
        }
      `}
      </style>
    </div>
  )
}
