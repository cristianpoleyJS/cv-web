import { rem } from 'styles/utils'

export default function ContactUs () {
  const clickOpenContact = () => {
    window.location.href =
      'mailto:cristianpoleygonzalez@gmail.com?subject=[COMPANY NAME]'
  }
  return (
    <>
      <section id="contact" data-aos="fade-up" data-aos-duration="1000">
        <h3>You can contact me anytime by clicking here →</h3>
        <button className="secondary-button" onClick={clickOpenContact}>
          Contact
        </button>
      </section>
      <style jsx>
        {`
          section {
            width: 100%;
            background-color: var(--palette--secondary-background-color);
            height: ${rem(120)};
            padding: 0 ${rem(40)};
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
          }

          h3,
          button {
            align-self: center;
          }

          h3 {
            color: var(--color--white);
          }

          button {
            text-transform: uppercase;
          }

          @media (max-width: ${rem(768)}) {
            h3 {
              display: none;
            }
            button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}
