const features = [
  {
    title: 'Talk to our team for assistance',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    icon: 'images/icons/feature-icon-1.svg',
  },
  {
    title: 'Mail Us at',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    icon: 'images/icons/feature-icon-2.svg',
  },
  {
    title: 'Our Address',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    icon: 'images/icons/feature-icon-3.svg',
  },
];

const KeyFeatureGrid = () => {
  return (
    <div className="key-feature-grid mt-5 grid grid-cols-3 gap-7 md:grid-cols-3 xl:grid-cols-3">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
          <div>
            <h3 className="h4 text-xl lg:text-2xl font-nunito font-bold text-slate-700">{feature.title}</h3>
            <p className="font-nunito text-slate-400">{feature.description}</p>
          </div>
          <span className="icon mt-4">
            <img className="object-contain" src={feature.icon} alt={feature.title} />
          </span>
        </div>
      ))}
    </div>
  );
};

export default KeyFeatureGrid;
