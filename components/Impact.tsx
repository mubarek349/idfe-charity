interface ImpactStat {
  id?: string;
  title: string;
  value: string;
  description?: string;
  icon?: string;
  order?: number;
}

export default function Impact({ data }: { data?: ImpactStat[] }) {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the real difference we're making in communities around the world
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {(data && data.length > 0 ? data : [
            { title: "Children Educated", value: "15,000+", icon: "📚" },
            { title: "Lives Improved", value: "25,000+", icon: "❤️" },
            { title: "Projects Completed", value: "100+", icon: "✅" },
            { title: "Funds Raised", value: "$2M+", icon: "💰" }
          ]).map((stat: ImpactStat, index: number) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



