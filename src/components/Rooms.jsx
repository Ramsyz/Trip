
function Rooms() {
  return (
    <div className="max-w-[1400px] mx-auto h-[500px] bg-blue-100 my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 ">
      <div className="lg:top-20 relative col-span-2 lg:col-span-1">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati, distinctio animi blanditiis perspiciatis repellat deserunt repudiandae vitae suscipit velit.</p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        <img className="row-span-2 object-cover w-full h-full" src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
      </div>
    </div>
  )
}

export default Rooms
