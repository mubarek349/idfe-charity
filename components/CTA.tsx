
interface CTAData {
  id?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
  textColor?: string;
}

export default function CTA({ data }: { data?: CTAData | null }) {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {data?.title || "Join Us in Making a Difference"}
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
          {data?.description || "Your support can help us reach more communities and create lasting positive change. Every contribution matters."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
            {data?.buttonText || "Donate Today"}
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300">
            Volunteer With Us
          </button>
        </div>
      </div>
    </section>
  );
}



