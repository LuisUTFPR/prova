export default function Header() {
    return (
            <header className="bg-[#12AC8E] p-10">
              <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold ">
                  <span className="text-white">Health</span>
                  <span className="text-orange-400">Care</span>
                </h1>
                <nav>
                  <ul className="flex space-x-4 text-white">
                    <li>
                    <a
  href="#"
  className="linetext-[white] bg-orange-500 px-8 py-[8px] rounded hover:bg-blue-600 hover:text-white"
>
  Contact Us
</a>
                  </ul>
                </nav>
              </div>
              <div className="container mx-auto mt-40 text-left text-white m-10">
                <div className="ml-4 w-2/3 mx-auto">
                  <h2 className="text-6xl font-bold">Providing An Exceptional Patient Experience</h2>
                  <p className="text-3xl my-4 mt-10">
                    Welcome, where exceptional patient experiences are our priority. With compassionate care, state-of-the-art facilities, and a patient-centered approach, we're dedicated to your well-being. Trust us with your health and experience the difference.
                  </p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="bg-orange-500 text-white text-lg font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                      See Services
                    </a>
                  </div>
                </div>
              </div>
            </header>
          );
        };

