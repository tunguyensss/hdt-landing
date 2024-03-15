interface FooterProps {
  dict: any;
}
export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div id="footer-content" className="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
        <div className="container xl:max-w-6xl mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
            <div className="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
              <div className="flex items-center mb-2">
                <span className="text-3xl leading-normal mb-2 font-bold text-gray-800 mt-2">
                  HDT Solutions
                </span>
                {/* Optionally, you could use an <img> tag here */}
              </div>
              <p>{dict.homepage.hero.subtitle}</p>
              {/* <ul className="space-x-3 mt-6 mb-6 Lg:mb-0">
                <li className="inline-block">
                  <a
                    target="_blank"
                    className="hover:text-gray-800"
                    rel="noopener noreferrer"
                    href="https://facebook.com"
                    title="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul> */}
            </div>
            <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
              <div className="flex flex-wrap flex-row">
                <div className="flex-shrink max-w-full w-1/2 md:w-1/3 mb-6 lg:mb-0">
                  <h4 className="text-base leading-normal mb-3 uppercase text-gray-800">
                    Support
                  </h4>
                  <ul>
                    <li className="py-1 hover:text-gray-900">
                      <a href="docs/index.html">Documentation</a>
                    </li>
                    {/* Additional links */}
                  </ul>
                </div>
                {/* Additional columns */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-dark">
        <div className="container xl:max-w-6xl mx-auto px-4 py-4 border-t border-gray-200 border-opacity-10">
          <div className="row">
            <div className="col-12 col-md text-center">
              <p className="d-block my-3">
                Copyright © HDT Solutions | All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
