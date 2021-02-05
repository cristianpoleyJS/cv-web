import Links from 'components/Links'

export default function HeaderApp () {
  return (
      <>
        <header>
          <Links />
        </header>
        <style jsx>{`
          @media (max-width: 1024px) {
            header {
              padding-top: 2rem;
            }
          }
        `}
        </style>
      </>
  )
}
