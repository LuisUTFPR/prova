export default function Footer() {
    return (
      <div>
        <Head>
          <title>Your Healthcare</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <header className="bg-[#12AC8E] py-4">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-white text-3xl font-bold">
              <span className="text-[#12AC8E]">Health</span>
              <span className="text-orange-400">Care</span>
            </h1>
  
            <nav className="space-x-6">
              <a href="#" className="text-white hover:underline">Home</a>
              <a href="#" className="text-white hover:underline">About Us</a>
              <a href="#" className="text-white hover:underline">Work with Us</a>
              <a href="#" className="text-white hover:underline">Our Blog</a>
              <a href="#" className="text-white hover:underline">Terms and Conditions</a>
            </nav>
          </div>
        </header>
  
        <main>
          <section className="container mx-auto my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                  <span className="text-[#12AC8E]">Health</span>
                  <span className="text-orange-400 my">Care</span>
                </h2>
  
                <p className="text-black mb-4">
                  We are honored to be a part of your healthcare journey and committed to delivering compassionate, personalized, and top-notch care every step of the way.
                </p>
  
                <p className="text-black">
                  Trust us with your health, and let us work together to achieve the best possible outcomes for you and your loved ones.
                </p>
              </div>
  
              <div>
                {/* Conteúdo do outro lado da seção */}
              </div>
            </div>
          </section>
        </main>
  
        <footer className="bg-[#E9F7F7]">
          <div className="container mx-auto py-8">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/4 mb-4">
                <h2 className="text-xl md:text-xl lg:text-xl font-bold mb-2">
                  <span className="text-[#12AC8E]">Health</span>
                  <span className="text-orange-400">Care</span>
                </h2>
  
                <p className="text-black mb-4">
                  We are honored to be a part of your healthcare journey and committed to delivering compassionate, personalized, and top-notch care every step of the way.
                </p>
  
                <p className="text-black">
                  Trust us with your health, and let us work together to achieve the best possible outcomes for you and your loved ones.
                </p>
              </div>
  
              <div className="w-full md:w-1/4 mb-4">
                <h2 className="text-sm font-bold text-[#12AC8E] uppercase">About Us</h2>
                <ul className="text-black font-medium">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Home</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">About Us</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Work with Us</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Our Blog</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Terms and Conditions</a>
                  </li>
                </ul>
              </div>
  
              <div className="w-full md:w-1/4 mb-4">
                <h2 className="text-sm font-bold text-[#12AC8E] uppercase">Services</h2>
                <ul className="text-black font-medium">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Search Terms</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Advance Search</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Suppliers</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Our Stores</a>
                  </li>
                </ul>
              </div>
  
              <div className="w-full md:w-1/4 mb-4">
                <h2 className="text-sm font-bold text-[#12AC8E] uppercase">Contact Us</h2>
                <ul className="text-black font-medium">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      123, London Bridge Street, London
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">✉ support@care.com</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">☎ (+012) 3456 789</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="bg-[#12AC8E] py-4 text-white text-center">
            <p>© 2023 <a href="#">Copyright © 2023 Web Design Mastery</a>. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
               
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
