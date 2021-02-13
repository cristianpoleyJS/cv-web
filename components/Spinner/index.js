import { rem } from 'styles/utils'

export default function Spinner () {
  return (
        <>
            <div className="container-spinner">
                <div className="spinner">
                    <div className="bounce-first"></div>
                    <div className="bounce-second"></div>
                </div>
          </div>

            <style jsx>{`
                .container-spinner {
                    align-items: center;
                    display: flex;
                    height: ${rem(800)};
                }
                .spinner {
                    height: ${rem(40)};
                    margin: 0 auto;
                    position: relative;
                    width: ${rem(40)};
                }

                .bounce-first, .bounce-second {
                    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
                    animation: sk-bounce 2.0s infinite ease-in-out;
                    background-color: var(--palette--main-brand-color);
                    border-radius: 50%;
                    height: 100%;
                    left: 0;
                    opacity: 0.6;
                    position: absolute;
                    top: 0;
                    width: 100%;
                }

                .bounce-second {
                    -webkit-animation-delay: -1.0s;
                    animation-delay: -1.0s;
                }

                @-webkit-keyframes sk-bounce {
                    0%, 100% { -webkit-transform: scale(0.0) }
                    50% { -webkit-transform: scale(1.0) }
                }

                @keyframes sk-bounce {
                    0%, 100% { 
                        transform: scale(0.0);
                        -webkit-transform: scale(0.0);
                    } 50% { 
                        transform: scale(1.0);
                        -webkit-transform: scale(1.0);
                    }
                }
            `}
            </style>
        </>
  )
}
