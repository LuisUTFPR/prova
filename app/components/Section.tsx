
export default function Section() {
    return (
<section className="container mx-auto mt-8 text-black">
<header className="text-center">
    <h2 className="text-4xl font-bold text-left ">Our Special Service</h2>
</header>
<p className="text-2lg text-left my-8"> 
    Beyond simply providing medical care, our commitment lies in delivering unparalleled service tailored to your unique needs.
</p>

<div className="flex flex-wrap justify-start">
        <div className="w-1/3 p-2 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Laboratory Test</h3>
            <p className="text-sm my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lorem a dui tempus auctor.</p>
            <div className="flex justify-center">
                <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
        </div>
        <div className="w-1/3 p-2 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Health Check</h3>
            <p className="text-sm my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lorem a dui tempus auctor.</p>
            <div className="flex justify-center">
                <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
        </div>
        <div className="w-1/3 p-2 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">General Dentistry</h3>
            <p className="text-sm my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lorem a dui tempus auctor.</p>
            <div className="flex justify-center">
                <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
        </div>
    </div>

</section>
);
}