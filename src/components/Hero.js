import React from "react";

const Hero = () => {
  const img =
    "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="max-w-[1640px] mx-auto p-4  ">
      <div className="max-h-[500px] relative">
        <div className="absolute h-full w-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center ">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font bold  ">
            The <span className="text-orange-600 font-bold">Best</span>
          </h1>
          <h2 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font bold  ">
            {" "}
            <span className="text-orange-600 font-bold">Food</span> Delivery
          </h2>
          <p className="px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font bold  ">
            {" "}
            <h3 className="text-white-600 font-bold">
              To <span className="text-orange-600 font-bold"> Your Door </span>
            </h3>{" "}
          </p>
          <p>
            <button className="hover:bg-white hover:text-black border bg-orange-600 text-white px-4 py-2 rounded-full mt-4 ml-3 hover: ">
              Order Now
            </button>
          </p>
        </div>
        <div>
          <img
            className="w-full max-h-[500px] object-cover "
            src={img}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
