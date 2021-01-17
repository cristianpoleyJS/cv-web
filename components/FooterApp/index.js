export default function FooterApp () {
  return (
    <>
      <footer>
        <a href="/">
          CP
        </a>
        Portfolio
        Jobs
        Contact
        <a href="/legal-notice"><strong>Aviso legal</strong></a>
        <a href="/politics-privacy"><strong>Politica de privacidad</strong></a>
        <a href="/">
          cristianpoleygonzalez@gmail.com
        </a>
      </footer>
      <style jsx> {`
        footer {
          width: calc(100% - 24px);
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
      </style>
    </>
  )
}
