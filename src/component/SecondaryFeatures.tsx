import React from 'react';

const SecondaryFeatures: React.FC = () => {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-10 sm:pb-20 sm:pt-6 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-2xl md:text-4xl/tight font-bold text-black mt-4 font-nunito">
            The Future of Healthcare, Today
          </h2>
          <p className="mt-4 font-nunito text-lg tracking-tight text-slate-700">
            We've modernized healthcare, boosting efficiency and saving money through paperless processes.
          </p>
        </div>

        <div className="-mx-4 mt-7 md:mt-20 grid md:grid-cols-3 gap-x-8 gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
          {/* First Card */}
          <div>
            <div className="mx-auto max-w-2xl">
              <div className="w-9 rounded-lg bg-blue-600">
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                  <defs>
                    <linearGradient id="grad1" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse">
                      <stop offset=".194" stopColor="#fff" />
                      <stop offset="1" stopColor="#6692F1" />
                    </linearGradient>
                  </defs>
                  <path
                    d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-sm font-medium text-blue-600 font-nunito">Reporting</h3>
              <p className="mt-2 font-display text-xl text-slate-900 font-nunito font-bold">
              Real-time medical reports
              </p>
              <p className="mt-4 text-sm text-slate-600">
              Our systems improve the data quality by recording instant medical information. Therefore, it quickens the treatment proce.
              </p>
            </div>

          </div>

          {/* Second Card */}
          <div>
            <div className="mx-auto max-w-2xl">
              <div className="w-9 rounded-lg bg-blue-600">
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                  <path opacity=".5" d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff" />
                  <path opacity=".3" d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff" />
                  <path d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff" />
                </svg>
              </div>
              <h3 className="mt-6 text-sm font-medium text-blue-600 font-nunito">Inventory</h3>
              <p className="mt-2 font-display text-xl text-slate-900 font-nunito font-bold">
              Digital medical access
              </p>
              <p className="mt-4 text-sm text-slate-600">
              Our software systems allow users to connect remotely with healthcare providers. Also, assist patients in maintaining routine medical activities.
              </p>
            </div>

          </div>

          {/* Third Card */}
          <div>
            <div className="mx-auto max-w-2xl">
              <div className="w-9 rounded-lg bg-blue-600">
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                  <path
                    opacity=".5"
                    d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                    fill="#fff"
                  />
                  <path d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z" fill="#fff" />
                </svg>
              </div>
              <h3 className="mt-6 text-sm font-medium text-blue-600 font-nunito">Contacts</h3>
              <p className="mt-2 font-display text-xl text-slate-900 font-nunito font-bold">
              Appointment management


              </p>
              <p className="mt-4 text-sm text-slate-600">
              Our systems in healthcare manage all appointments in a single platform. Therefore, eliminate the queue system.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryFeatures;
