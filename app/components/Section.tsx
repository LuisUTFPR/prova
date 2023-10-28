export default function Section() {
  return (
    <section className="container mx-auto mt-8 text-black">
      <header className="text-center">
        <h2 className="text-4xl font-bold ml-8 text-left">Our Special Service</h2>
      </header>
      <div className="flex flex-wrap -mx-2 mt-4">
        <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="/img/card-image1.jpg"
              alt="Card Image 1"
              className="w-16 h-16 m-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Laboratory Test</h3>
            <p className="text-base my-2">
              Accurate Diagnostics, Swift Results: Experience top-notch Laboratory
              Testing at our facility.
            </p>
            <div className="flex justify-center">
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="/img/card-image2.jpg"
              alt="Card Image 2"
              className="w-16 h-16 m-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Health Check</h3>
            <p className="text-base my-2">
              Our thorough assessments and expert evaluations help you stay
              proactive about your health.
            </p>
            <div className="flex justify-center">
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="/img/card-image3.jpg"
              alt="Card Image 3"
              className="w-16 h-16 m-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">General Dentistry</h3>
            <p className="text-base my-2">
              Experience comprehensive oral care with Dentistry. Trust us to keep
              your smile healthy and bright.
            </p>
            <div className="flex justify-center">
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





