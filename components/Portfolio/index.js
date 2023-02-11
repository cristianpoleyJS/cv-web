import stylesSections from 'styles/sections'
import { Carousel } from 'react-responsive-carousel'
import { rem } from 'styles/utils'

export default function Portfolio ({ projects }) {
  return (
    <>
      <section id="portfolio" data-aos="fade-up" data-aos-duration="1000">
        <h2>Portfolio</h2>
        <div className="wrapper-carousel">
          <Carousel
            interval={4000}
            autoPlay={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
          >
            {projects.map(
              ({ id, url, title, description, technologies, photo }) => (
                <div key={id} className="project">
                  <div
                    className="project__image"
                    style={{ backgroundImage: `url(${photo})` }}
                  />
                  <div className="project__content">
                    <h3 className="project__content__title">
                      {url
                        ? (
                        <a href={url} target="_blank" rel="noreferrer">
                          {title}
                        </a>
                          )
                        : (
                        <>{title}</>
                          )}
                    </h3>
                    <span className="project__content__description">
                      {description}
                    </span>
                    <span className="project__content__technologies">
                      {technologies}
                    </span>
                  </div>
                </div>
              )
            )}
          </Carousel>
        </div>
      </section>
      <style jsx>{stylesSections}</style>
      <style jsx>{`
        .wrapper-carousel {
          position: relative;
          box-shadow: 0 ${rem(4)} ${rem(25)} -5px rgb(0 0 0 / 10%),
            0 ${rem(10)} ${rem(10)} -5px rgb(0 0 0 / 4%);
        }
        h3 {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .project {
          border-top-right-radius: ${rem(3)};
          border-bottom-right-radius: ${rem(3)};
          width: 100%;
          align-items: center;
          display: grid;
          grid-template-columns: 40% 60%;
          min-height: ${rem(280)};
        }
        .project__image {
          background-position-y: top;
          background-position-x: center;
          background-size: cover;
          height: 100%;
          width: 100%;
          border-top-left-radius: ${rem(5)};
          border-bottom-left-radius: ${rem(5)};
        }
        .project__content {
          height: 100%;
          align-items: center;
          padding: 1rem;
          display: grid;
          text-align: left;
          justify-content: space-between;
        }
        .project__content__title {
          color: var(--palette--main-brand-color);
          display: block;
        }
        .project__content__title:hover {
          color: var(--palette--secondary-brand-color);
        }
        .project__content__description {
          display: block;
          font-size: ${rem(20)};
          color: var(--palette--main-text-color);
        }
        .project__content__technologies {
          display: block;
          font-style: italic;
        }

        @media (max-width: ${rem(540)}) {
          .project {
            grid-template-columns: 100%;
            padding-bottom: 2rem;
          }

          .project__image {
            height: ${rem(200)};
          }
        }
      `}</style>
    </>
  )
}
