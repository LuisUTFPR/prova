export default function Section1() {
    return (
      <section className="container mx-auto mt-8 text-black">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-3xl font-bold ml-8">About Us</h2>
          <p className="text-xl md:text-3xl my-4 ml-8">
            Welcome to our healthcare website, your one-stop destination for reliable and comprehensive health care information. We are committed to promoting wellness and providing valuable resources to empower you on your health journey.
          </p>
          <p className="text-xl md:text-3xl my-4 ml-8">
            Explore our extensive collection of expertly written articles and guides covering a wide range of health topics. From understanding common medical conditions to tips for maintaining a healthy lifestyle, our content is designed to educate, inspire, and support you in making informed choices for your health.
          </p>
          <p className="text-xl md:text-3xl my-4 ml-8">
            Discover practical health tips and lifestyle advice to optimize your physical and mental well-being. We believe that small changes can lead to significant improvements in your quality of life, and we're here to guide you on your path to a healthier and happier you.
          </p>
        </div>
        <div className="text-center md:flex items-center justify-center">
          <img
            src="/img/about.svg"
            alt="Imagem Grande"
            className="w-full h-auto"
          />
        </div>
      </section>
    );
  }