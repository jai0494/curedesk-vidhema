
const Footer = () => {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6 border-[1.5px] border-blue-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug mb-2 !font-bold font-nunito text-blue-600">
              Curedesk
            </h4>
            <p className="block antialiased font-sans text-inherit text-md mt-0 mb-2 font-normal !text-gray-600 font-nunito">
              Easy to use for Tailwind CSS and Material Design.
            </p>
            <div className="mt-6">
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none" aria-hidden="true"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-square font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none" aria-hidden="true"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-dribbble font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none" aria-hidden="true"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-github font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none" aria-hidden="true"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-discord font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-bold text-slate-600 font-nunito">Company</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-bold font-nunito text-slate-600">Help and Support</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Knowledge Center
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Premium Support
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer" target="_self" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-bold text-slate-600 font-nunito">Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" rel="noreferrer" target="_self" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Custom Development
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Tailwind Components
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-bold text-slate-600 font-nunito">Technologies</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      React
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Astro
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="#" alt="Vercel Logo" className="mt-2 h-6" />
            </a>
          </div>
          <div className="text-center">
            <a href="https://www.vidhema.com" className="font-normal text-gray-600 transition-colors hover:text-primary">
              © Vidhema
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
