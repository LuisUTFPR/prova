export default function Header() {
    return (
        <section className="container mx-auto mt-8 text-black">
            <header className="text-center">
              <h2 className="text-4xl font-bold ml-8 text-left">Our Special Service</h2>
            </header>
            <p className="text-3xl text-left my-8 ml-8">

              Beyond simply providing medical care,<br />
              our commitment lies in delivering unparalleled service tailored to your
              unique needs.
            </p>
      
            <div className="flex flex-wrap justify-start">
              <div className="w-1/3 p-2 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">Laboratory Test</h3>
                <p className="text-sm my-2">
                  Accurate Diagnostics, Swift Results: Experience top-notch Laboratory
                  Testing at our facility.
                </p>
                <div className="flex justify-center">
                  <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                </div>
              </div>
              <div className="w-1/3 p-2 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">Health Check</h3>
                <p className="text-sm my-2">
                  Our thorough assessments and expert evaluations help you stay
                  proactive about your health.
                </p>
                <div className="flex justify-center">
                  <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                </div>
              </div>
              <div className="w-1/3 p-2 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">General Dentistry</h3>
                <p className="text-sm my-2">
                  Experience comprehensive oral care with Dentistry. Trust us to keep
                  your smile healthy and bright.
                </p>
                <div className="flex justify-center">
                  <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                </div>
              </div>
            </div>
          </section>
          );
        };