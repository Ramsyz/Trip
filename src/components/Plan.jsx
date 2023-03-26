
function Plan() {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/16013871/pexels-photo-16013871.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="/" />
        <img className=" row-span-2 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/15843151/pexels-photo-15843151.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="/" />
        <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/15804621/pexels-photo-15804621.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="/" />
        <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/13368972/pexels-photo-13368972.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="/" />
        <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/9495080/pexels-photo-9495080.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="/" />
      </div>

      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sint!</p>
        <p className="pb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ipsam facilis omnis hic tenetur obcaecati voluptas consequuntur libero nobis perspiciatis?</p>
        <div>
            <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
            <button className="bg-black text-white border-black hover:shadow-xl">Book Your Trip</button>
        </div>
      </div>
    </div>
  )
}

export default Plan
