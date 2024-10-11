import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  speclity: string;
  clinic: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  imageSrc,
  imageAlt,
  speclity,
  clinic,



}) => (
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
        <p className="text-lg tracking-tight text-slate-900 font-nunito md:min-h-[140px]">
          {quote}
        </p>
      </blockquote>
      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
        <div>
          <div className="font-display text-base text-[#31335a] font-semibold text-[20px] mb-1">{name}</div>
          <p className='font-display text-base text-[#516173] text-sm font-medium mb-2'>{speclity}</p>
          <p className='font-display text-base text-[#516173] text-sm '>{clinic}</p>
        </div>
        <div className="overflow-hidden rounded-full bg-slate-50">
          <img
            alt={imageAlt}
            loading="lazy"
            width="56"
            height="56"
            className="h-14 w-14 object-cover"
            src={imageSrc}
            style={{ color: 'transparent' }}
          />
        </div>
      </figcaption>
    
    </figure>
  </li>
);

const TestimonialFeatures: React.FC = () => {
  const testimonials = [
    {
      quote:
        'The electronic prescribing feature has improved patient safety and reduced medication errors. It\'s also helped us streamline our workflow.',
      name: 'Dr. Cheong',
      imageSrc: 'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/doc.png?alt=media&token=a26538ac-4238-4578-acd7-e6b380fcaa8f',
      imageAlt: 'Dr. Cheong',
      speclity:"Endocrinologist and Diabetologist",
      clinic:"Prime Care Clinic",
    },
    {
      quote:
        'The patient portal has been a great way to improve communication with our patients. They can easily access their medical records and schedule appointments online.',
      name: 'Dr. Ashutosh Chaturvedi',
      imageSrc: 'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/ashutosh-chaturvedi.jpg?alt=media&token=2d86d753-f7df-402e-ae78-989bdaba5654',
      imageAlt: 'Dr. Ashutosh Chaturvedi',
      speclity:"MD (MEDICINE) Certified in Diabetes",
      clinic:"Guru kripa Medical Centre",
    },
    {
      quote:
        "This software has been a lifesaver for our clinic. It's easy to use, and the appointment scheduling feature has been a game-changer. Our patients love the online booking option!",
      name: 'Dr. Caitlin E. Hackett',
      imageSrc: 'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/doctor-mask.jpg?alt=media&token=68d3f6a2-8958-4d10-9fee-da888fb8facd',
      imageAlt: 'Sheryl Berge',
      speclity:"Pulmonologist, Chest Physician",
      clinic:"Scripss Medical Centre",

    },
    {
      quote:
        "The billing and invoicing module has simplified our financial management. We've reduced errors and streamlined our claims process. It's a great time-saver.",
      name: 'Dr. Ameila Young',
      imageSrc: 'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/lady-doctor.jpg?alt=media&token=0aad61ba-39dc-4c9c-95fd-d62f64fde65d',
      imageAlt: 'Sheryl Berge',
      speclity:"Urologist, Urosurgeon, Kidney",
      clinic:"Mayo Urologist & Diabetes Centre",
    },
    {
      quote:
        'The customer support team has been excellent. They\'re always quick to respond to our questions and provide helpful assistance.',
      name: 'Dr. Mukesh Sharma',
      imageSrc: 'https://mukeshsharma-673f4.web.app/assets/img/hero-bg-mobile.jpg',
      imageAlt: 'Dr. Mukesh Sharma',
      speclity:"Homeopathy specialist",
      clinic:"Homeopath Clinic",
    },
    {
      quote:
        'I would highly recommend this software to any clinic looking to improve their efficiency and patient care.',
      name: 'Dr. Subhash Sharma',
      imageSrc: 'https://firebasestorage.googleapis.com/v0/b/curedesk-3593d.appspot.com/o/doc1.jfif?alt=media&token=67d97650-13b7-4e7f-8b1b-1d76fb2ba730',
      imageAlt: 'Sheryl Berge',
      speclity:"Homeopathy specialist",
      clinic:"iCare Centre",
    }
  ];

  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 font-nunito font-bold sm:text-4xl md:max-w-[1000px] md:text-center">
            Loved by Doctors Worldwide
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of mission-critical features.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-10 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialFeatures;
