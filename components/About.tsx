interface Value {
  title: string;
  description?: string;
}

interface AboutData {
  title: string;
  description: string;
  mission: string;
  vision: string;
  values: Value[];
  imageUrl?: string;
}

export default function About({ data }: { data?: AboutData | null }) {
  const defaultData = {
    title: "About IDFE Charity",
    description: "Founded with a vision to create lasting positive change, IDFE Charity has been serving communities for over a decade. We believe in the power of collective action and sustainable solutions.",
    mission: "Our mission is to empower individuals and communities through education, healthcare, and economic development programs that create lasting impact.",
    vision: "A world where every person has access to opportunities for growth and prosperity.",
    values: [
      { title: "Compassion & Empathy", description: "We approach every situation with understanding" },
      { title: "Transparency & Accountability", description: "We operate with honesty in all activities" },
      { title: "Innovation & Sustainability", description: "We focus on long-term solutions" },
      { title: "Community Partnership", description: "We work together with communities" }
    ]
  };

  const content = data || defaultData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {content.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {content.description}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {content.mission}
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">15+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">200+</div>
                <div className="text-gray-600">Communities Served</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-green-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                <ul className="space-y-3">
                  {content.values.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-gray-900 font-medium">{value.title}</span>
                        {value.description && (
                          <p className="text-sm text-gray-600 mt-1">{value.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



