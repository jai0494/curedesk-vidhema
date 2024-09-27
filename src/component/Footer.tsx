import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6 border-[1.5px] border-blue-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <div className="text-gray-500 font-bold text-xl relative">
              <img src="/logo-light.svg" alt='Logo' className='h-[50px]' />
              <span className='font-nunito text-black font-bold absolute left-[64px] top-[10px] w-[129px] text-[2rem]'>Curedesk</span>
            </div>
            <p className="block antialiased font-sans text-inherit text-md mt-0 mb-2 font-normal !text-gray-600 font-nunito">
            Focused on patients, powered by technology.
            </p>
            <div className="mt-6 flex gap-2">
              <a href="#" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path><path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
              </a>
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-bold text-slate-600 font-nunito">Company</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="/contact" target="_blank" rel="noreferrer" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      Book Appointment
                    </a>
                  </li>
                  
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-bold font-nunito text-slate-600">Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      <Link to="/ABHA">ABHA</Link>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      <Link to="/PMJAY">PMJAY</Link>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noreferrer" target="_blank" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      EMR Software
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer" target="_self" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      EHR Software
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-4/12">
                <span className="text-md mb-4 block font-bold text-slate-600 font-nunito">Country Wise Solutions</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" rel="noreferrer" target="_self" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      <Link to="/EHRSoftwareIndia">Best EHR Software in India</Link>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noreferrer" target="_self" className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary font-nunito">
                      <Link to="/EHRSoftwareUSA">Best EHR Software in USA</Link>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
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
              </div> */}
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="#" alt="Vercel Logo" className="mt-2 h-6" />
            </a> */}
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
