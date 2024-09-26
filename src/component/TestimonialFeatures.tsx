import React from 'react';

const TestimonialFeatures: React.FC = () => {
  return (
    <section
    id="testimonials"
    aria-label="What our customers are saying"
    className="bg-slate-50 py-10 sm:py-12"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl md:text-center">
        <h2 className="font-display text-3xl tracking-tight text-slate-900 font-nunito font-bold sm:text-4xl md:max-w-[1000px] text-center">
          Loved by Businesses Worldwide
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Our software is so simple that people can’t help but fall in love with
          it. Simplicity is easy when you just skip tons of mission-critical
          features.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-10 lg:max-w-none lg:grid-cols-3"
      >
        <li>
          <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  className="absolute left-6 top-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900 font-nunito">
                    Curedesk is so easy to use I can’t help but wonder if it’s
                    really doing the things the government expects me to do.
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      Sheryl Berge
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      CEO at Lynch LLC
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt=""
                      loading="lazy"
                      width="56"
                      height="56"
                      className="h-14 w-14 object-cover"
                      src="/public/ashutosh-chaturvedi.jpg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  className="absolute left-6 top-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900 font-nunito">
                    Curedesk is so easy to use I can’t help but wonder if it’s
                    really doing the things the government expects me to do.
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      Sheryl Berge
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      CEO at Lynch LLC
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt=""
                      loading="lazy"
                      width="56"
                      height="56"
                      className="h-14 w-14 object-cover"
                      src="/public/ashutosh-chaturvedi.jpg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
        <li>
          <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  className="absolute left-6 top-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900 font-nunito">
                    I’m trying to get a hold of someone in support, I’m in a lot
                    of trouble right now and they are saying it has something to
                    do with my books. Please get back to me right away.
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      Amy Hahn
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      Director at Velocity Industries
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt=""
                      loading="lazy"
                      width="56"
                      height="56"
                      className="h-14 w-14 object-cover"
                      src="/public/ashutosh-chaturvedi.jpg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  className="absolute left-6 top-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900 font-nunito">
                    I’m trying to get a hold of someone in support, I’m in a lot
                    of trouble right now and they are saying it has something to
                    do with my books. Please get back to me right away.
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      Amy Hahn
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      Director at Velocity Industries
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt=""
                      loading="lazy"
                      width="56"
                      height="56"
                      className="h-14 w-14 object-cover"
                      src="/public/ashutosh-chaturvedi.jpg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
        <li>
          <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  className="absolute left-6 top-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900 font-nunito">
                    Curedesk is so easy to use I can’t help but wonder if it’s
                    really doing the things the government expects me to do.
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      Sheryl Berge
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      CEO at Lynch LLC
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt=""
                      loading="lazy"
                      width="56"
                      height="56"
                      className="h-14 w-14 object-cover"
                      src="/public/ashutosh-chaturvedi.jpg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  className="absolute left-6 top-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900 font-nunito">
                    Curedesk is so easy to use I can’t help but wonder if it’s
                    really doing the things the government expects me to do.
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      Sheryl Berge
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      CEO at Lynch LLC
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt=""
                      loading="lazy"
                      width="56"
                      height="56"
                      className="h-14 w-14 object-cover"
                      src="/public/ashutosh-chaturvedi.jpg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
  
    );
};

export default TestimonialFeatures;