import React from 'react';
import { scheduleData } from '../json/dropdownData'; // Assuming the path is correct

const Schedule: React.FC = () => {
  return (
    <section id="schedule" aria-label="Schedule" className="relative pt-20 pb-2">
      <div className="absolute inset-x-0 -top-20" ><svg className="min-w-[80rem] -translate-x-60 md:translate-x-0 mx-auto w-full -scale-y-100 contrast-150 opacity-50 dark:opacity-25" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1739_2)"><g filter="url(#filter0_f_1739_2)"><ellipse cx="987.203" cy="967.25" rx="581" ry="356.5" transform="rotate(8.47676 987.203 967.25)" fill="#9641C1"></ellipse></g><g filter="url(#filter1_f_1739_2)"><ellipse cx="991.907" cy="1000.77" rx="454.5" ry="280.5" transform="rotate(11.69 991.907 1000.77)" fill="#FF94C8"></ellipse></g><g filter="url(#filter2_f_1739_2)"><ellipse cx="405" cy="1050" rx="448" ry="332" fill="#007FEC"></ellipse></g><g filter="url(#filter3_f_1739_2)"><ellipse cx="779" cy="985.5" rx="259" ry="204.5" fill="#FFE8AE"></ellipse></g></g><defs><filter id="filter0_f_1739_2" x="110.117" y="304.308" width="1754.18" height="1325.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1739_2"></feGaussianBlur></filter><filter id="filter1_f_1739_2" x="343.172" y="510.984" width="1297.47" height="979.573" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1739_2"></feGaussianBlur></filter><filter id="filter2_f_1739_2" x="-343" y="418" width="1496" height="1264" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1739_2"></feGaussianBlur></filter><filter id="filter3_f_1739_2" x="320" y="581" width="918" height="809" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1739_2"></feGaussianBlur></filter><clipPath id="clip0_1739_2"><rect width="1440" height="900" fill="white"></rect></clipPath></defs></svg></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl tracking-tighter text-slate-800 sm:text-5xl font-nunito font-bold">
          Clinic Management Software: Streamlining Operations for Efficient Healthcare
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
          By leveraging clinic management software, healthcare providers can improve operational efficiency
          </p>
        </div>
      </div>

      <div className="relative mt-14 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto grid grid-cols-1 gap-y-6 sm:grid-cols-3 gap-5">
            {Object.keys(scheduleData).map((date) => (
                <div key={date} className="mb-12">
                  {/* <h3 className="text-2xl font-bold text-blue-600">{date}</h3> */}
                  <ol role="list" className="space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur">
                    {(scheduleData[date as keyof typeof scheduleData] || []).map((event, index) => (
                      <li key={index}>
                        <h4 className="text-2xl font-bold tracking-tight text-blue-900 font-nunito">{event.name}</h4>
                        <p className="mt-1 tracking-tight text-blue-900 font-nunito">{event.title}</p>
                        <p className="mt-1 font-mono text-sm text-slate-500">{event.time}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default Schedule;
