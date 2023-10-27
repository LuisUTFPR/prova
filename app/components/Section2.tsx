export default function Section2() {
    return (
      <section className="container mx-auto mt-8 text-black">
        <header className="text-center">
          <h2 className="text-6xl font-bold ml-8 text-left">Our Special Doctors</h2>
          <p className="text-3xl text-left ml-8 my-4">
            We take pride in our exceptional team of doctors, each a specialist in their respective fields.
          </p>
        </header>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-2">
            <div className="bg-white rounded-lg shadow-lg text-center p-6">
              <img
                src="/img/emily.svg"
                alt="Dr. Emily Smith"
                className="w-full h-auto"
              />
              <h3 className="text-xl font-bold">Dr. Emily Smith</h3>
              <p className="text-base my-2">Cardiologist</p>
            </div>
          </div>
  
          <div className="w-full md:w-1/3 p-2">
            <div className="bg-white rounded-lg shadow-lg text-center p-6">
              <img
                src="/img/james.svg"
                alt="Dr. James Anderson"
                className="w-full h-auto"
              />
              <h3 className="text-xl font-bold">Dr. James Anderson</h3>
              <p className="text-base my-2">Neurosurgeon</p>
            </div>
          </div>
  
          <div className="w-full md:w-1/3 p-2">
            <div className="bg-white rounded-lg shadow-lg text-center p-6">
              <img
                src="/img/michel.svg"
                alt="Dr. Michael Lee"
                className="w-full h-auto"
              />
              <h3 className="text-xl font-bold">Dr. Michael Lee</h3>
              <p className="text-base my-2">Dermatologist</p>
            </div>
          </div>
        </div>
      </section>
    );
  }