export default function Header() {
    return (
<header className="bg-[#12AC8E] p-4 md:p-10 lg:h-1024">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-0">
                    <span className="text-white">Health</span>
                    <span className="text-orange-400 my">Care</span>
                </h1>
                <nav>
                    <ul className="flex space-x-4 text-white md:text-right">
                        <li><a href="#" className="linetext-white bg-orange-500 px-4 md:px-8 py-2 rounded hover:bg-blue-600 hover:text-white">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="container mx-auto mt-4 md:mt-40 text-left text-white m-4 md:m-10">
            <div className="md:ml-4 w-full md:w-2/3 mx-auto">
                <h2 className="text-2xl md:text-6xl lg:text-7xl font-bold">Providing An Exceptional Patient Experience</h2>
                <p className="text-base md:text-3xl my-2 md:my-4 mt-4 md:mt-10">
                    Welcome, where exceptional patient experiences are our priority. With compassionate care, state-of-the-art facilities, and a patient-centered approach, we're dedicated to your well-being. Trust us with your health and experience the difference.
                </p>
                <div className="mt-10 md:mt-20">
                    <a href="#" className="bg-orange-500 text-white text-lg font-semibold px-4 py-2 md:px-6 md:py-3 rounded hover:bg-blue-600 transition duration-300 mt-2">See Services</a>
                </div>
            </div>
        </div>
    </header>
)
}
