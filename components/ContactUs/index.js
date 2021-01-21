export default function ContactUs () {
  return (
    <>
      <section>
        <h3>Puedes concactar conmigo sin problema pulsando aquí →</h3>
        <button>Contacta</button>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          background-color: var(--palette--secondary-background-color);
          height: 120px;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          margin: 3rem 0 1rem;
        }        

        h3, button {
          align-self: center;
        }

        h3 {
          color: var(--color--white);
        }
      `}
      </style>
    </>
  )
}
