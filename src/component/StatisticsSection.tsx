import { stats } from '../json/dropdownData'
const StatisticsSection = () => {

  return (
    <section className="py-[40px] bg-blue-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-wrap gap-[70px] lg:gap-[50px] *:flex-auto">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-white text-center md:w-[20%] shrink-0 pr-[80px] lg:pr-[60px] last:pr-0 border-r border-white/20 last:border-0 md:even:pr-0 md:even:border-r-0 xs:pr-0 xs:border-r-0"
            >
              <img
                src={stat.image}
                alt="icon"
                className="w-max max-w-full mx-auto mb-[7px]"
              />
              <h3 className="font-bold text-[36px] font-nunito">{stat.count}</h3>
              <h6 className="font-medium font-nunito">{stat.description}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
