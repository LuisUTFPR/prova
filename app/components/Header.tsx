export default function Header() {
    return (
<header className="bg-emerald-500 p-10">
      <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-4xl font-bold">HealthCare</h1>
          <nav>
              <ul className="flex space-x-4 text-white">
                  <li><a href="#" className="linetext-[white] bg-orange-500 px-8 py-[8px] rounded hover:bg-[lightblue] hover:text-white">Contact Us</a></li>
              </ul>
          </nav>
      </div>
      <div className="container mx-auto mt-4 text-left text-white">
        <h2 className="text-4xl font-bold">Providing An Exceptional Patient Experience</h2>
        <p className="text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lorem a dui tempus auctor. Proin vel libero ut felis sagittis suscipit. Nullam cursus est vel tellus auctor feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lorem a dui tempus auctor. Proin vel libero ut felis sagittis suscipit. Nullam cursus est vel tellus auctor feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lorem a dui tempus auctor. Proin vel libero ut felis sagittis suscipit. Nullam cursus est vel tellus auctor feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lorem a dui tempus auctor. Proin vel libero ut felis sagittis suscipit. Nullam cursus est vel tellus auctor feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lorem a dui tempus auctor. Proin vel libero ut felis sagittis suscipit. Nullam cursus est vel tellus auctor feugiat.</p>
        <a href="#" className="bg-orange-500 text-white text-lg font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300">See Services</a>
    </div>
  </header>
)
}
