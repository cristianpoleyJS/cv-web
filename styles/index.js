import css from 'styled-jsx/css'
import { rem } from 'styles/utils'

export default css.global`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'TitilliumWeb', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        
        --color--orange: #fd9a00;
        --color--orangish: #ffa417;
        --color--white: #ffffff;
        --color--gray: #b3b3b3;
        --color--blackish: #595959;
        --color--black: #181818;
        --color--body: #f5f5f5;

        --sm: 40rem; /* 640px */
        --md: 48rem; /* 768px */
        --lg: 64rem; /* 1024px */
        --xl: 80rem; /* 1280px */
        --xl2: 88rem; /* 1400px */

        --palette--main-brand-color: var(--color--orange);
        --palette--secondary-brand-color: var(--color--orangish);

        --palette--main-background-color: var(--color--orange);
        --palette--secondary-background-color: var(--color--orangish);

        --palette--main-text-color: var(--color--black);
        --palette--secondary-text-color: var(--color--blackish);
        --palette--tertiary-text-color: var(--color--gray);

        --palette--weighted-border-color: var(--color--blackish);
        --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    }

    * {
        box-sizing: border-box;
        color: var(--palette--main-text-color);
    }
    
    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    h1 {
        font-size: ${rem(120)};
        font-weight: bold;
        margin: 0;
    }

    h2 {
        font-size: ${rem(64)};
        margin: 0;
    }
    
    h3 {
        font-size: ${rem(32)};
        font-weight: 500;
        margin: 0;
    }

    button {
        letter-spacing: ${rem(2)};
        border: 0;
        padding: ${rem(26)} ${rem(32)};
        outline: 0;
        cursor: pointer;
    }

    button.primary-button {
        background-color: var(--palette--main-background-color);
        font-size: 1rem;
        font-weight: 600;
        color: var(--color--white);
    }

    button.secondary-button {
        background-color: var(--color--white);
        font-size: 1rem;
        font-weight: 600;
        color: var(--palette--tertiary-text-color);
        border: 1px solid var(--palette--main-background-color);
    }
`
