import "./App.css";
import HeroScreenshot from "./assets/screenshots/hero-transparent.png";
import Features from "./components/Features";
import ReviewSection from "./components/Reviews/ReviewSection";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <header>
          <input
            type="checkbox"
            name="hbr"
            id="hbr"
            className="hbr peer"
            hidden
            aria-hidden="true"
          />
          <nav className="fixed z-20 w-full bg-white/20 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
            <div className="max-w-6xl m-auto px-6 md:px-12 lg:px-6">
              <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
                <div className="w-full items-center flex justify-between lg:w-auto">
                  <a className="relative z-10" href="#" aria-label="logo">
                    Aegis
                  </a>
                </div>
                <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                  <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>Features</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>Reviews</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>FAQ</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full space-y-2 border-primary/10 pl-4 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                    <a
                      href="#"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-600 dark:before:bg-sky-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                        Download
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="absolute top-0  h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <div className="">
          <div className="overflow-hidden  dark:bg-gray-900 mx-auto max-w-6xl lg:pt-44 pt-40 pb-56 flex-col align-center justify-center py-8 px-5 xl:px-0">
            <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
              <div className="lg:flex">
                <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                  <div className="flex ">
                    <a
                      className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200"
                      href="https://github.com/beemdevelopment/aegis"
                      target="_blank"
                    >
                      Check out our source code
                      <span className="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                        <svg
                          className="w-2.5 h-2.5"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-800 text-3xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left dark:text-white">
                    Aegis Authenticator
                  </h1>
                  <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                    Aegis Authenticator is a free, secure and open source app for Android to manage
                    your 2-step verification tokens for your online services.
                  </p>
                  <span className="block font-semibold text-gray-500 dark:text-gray-400">
                    The most trusted 2 factor app for your phone.
                  </span>
                  <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                    <a
                      aria-label="Download from Google Play Store"
                      href="#"
                      className="p-4 border text-gray-700  hover:text-gray-700 border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                    >
                      <div className="flex justify-center space-x-4">
                        <svg
                          className=" fill-gray-700 mt-1"
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        >
                          <path
                            fill="current-color"
                            d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z"
                          />
                        </svg>
                        <span className="hidden font-medium md:block dark:text-white">
                          Google Play Store
                        </span>
                      </div>
                    </a>
                    <a
                      aria-label="Download from F-Droid"
                      href="#"
                      className="p-4 border border-gray-200 text-gray-700  hover:text-gray-700 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30"
                    >
                      <div className="flex justify-center space-x-4">
                        <svg
                          className="my-auto"
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          role="img"
                        >
                          <path d="M20.472 10.081H3.528a1.59 1.59 0 0 0-1.589 1.589v10.59a1.59 1.59 0 0 0 1.589 1.589h16.944a1.59 1.59 0 0 0 1.589-1.589V11.67a1.59 1.59 0 0 0-1.589-1.589zM12 22.525c-3.066 0-5.56-2.494-5.56-5.56s2.494-5.56 5.56-5.56c3.066 0 5.56 2.494 5.56 5.56s-2.494 5.56-5.56 5.56zm0-10.114c-2.511 0-4.554 2.043-4.554 4.554S9.489 21.519 12 21.519s4.554-2.043 4.554-4.554-2.043-4.554-4.554-4.554zm0 7.863a3.322 3.322 0 0 1-3.221-2.568h1.67c.275.581.859.979 1.551.979.96 0 1.721-.761 1.721-1.721 0-.96-.761-1.721-1.721-1.721a1.7 1.7 0 0 0-1.493.874H8.805A3.322 3.322 0 0 1 12 13.655a3.321 3.321 0 0 1 3.309 3.309A3.321 3.321 0 0 1 12 20.274zM23.849.396l-.002.003-.006-.005.004-.004a.668.668 0 0 0-.519-.238.654.654 0 0 0-.512.259l-1.818 2.353a1.564 1.564 0 0 0-.523-.095H3.528c-.184 0-.358.038-.523.095L1.187.41A.657.657 0 0 0 .156.389L.16.393.153.399.151.396a.662.662 0 0 0-.012.824l1.909 2.471a1.587 1.587 0 0 0-.108.566v3.707a1.59 1.59 0 0 0 1.589 1.589h16.944a1.59 1.59 0 0 0 1.589-1.589V4.257c0-.2-.041-.39-.109-.566l1.909-2.471a.663.663 0 0 0-.013-.824zM6.904 8.228a1.787 1.787 0 1 1 0-3.574 1.787 1.787 0 0 1 0 3.574zm10.325 0a1.787 1.787 0 1 1 0-3.574 1.787 1.787 0 0 1 0 3.574z" />
                        </svg>

                        <span className="hidden font-medium md:block dark:text-white">F-Droid</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-1/3">
                  <div className="relative w-full">
                    <img
                      src={HeroScreenshot}
                      className="relative "
                      alt="wath illustration"
                      loading="lazy"
                      width="320"
                      height="280"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Features></Features>

        <ReviewSection></ReviewSection>
      </div>
    </>
  );
}

export default App;
