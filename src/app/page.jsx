
function Page() {
    return (
        <>
            <div className="bg-[#FBFFFF] h-[500px]">



                <div className="flex justify-between">
                    <div className=" m-20">
                        <h2 className="text-[#F57D1F] font-bold ">Explore the World</h2>
                        <h1 className="font-bold text-4xl pt-5">Plan your trip with us <br />Whenever you want </h1>
                        <p className="font-light text-[#7A7A7A] pt-5 ">A travel agency is more than just a booking service; it's a gateway to <br /> a world of possibilities. These agencies specialize in crafting  seamless  <br />travel experiences, handling everything from flights and accommodations <br /> to guided tours and unique excursions. Their expertise ensures </p>
                        <button className="bg-[#5AC2B9] text-white pl-6 pr-6 pt-3 pb-3 rounded-lg mt-10 flex"> <img src="/message.svg " className="w-7 pr-2" />Contact us</button>
                    </div>
                    <div>
                        <img src="./g.png" className="mr-32" />
                    </div>
                </div>

                <div className="bg-white flex  w-fit rounded-3xl p-6 absolute top-[500px] ml-20 shadow-lg border">
                    <p className="pl-8 border-r-2 border-[#5AC2B9] pr-5 text-gray-400">where</p>
                    <p className="pl-8 border-r-2 border-[#5AC2B9] pr-5 text-gray-400">when</p>
                    <p className="pl-8 border-r-2 border-[#5AC2B9] pr-5 text-gray-400">travel type</p>
                    <button className="bg-[#5AC2B9] text-white pr-4 pl-4 ml-6 pt-1 pb-1 rounded-lg">search</button>
                </div>
                <div className="bg-[#F0FFFF] h-[750px]">
                    <div className="text-center pt-20">
                        <h2 className="text-[#F57D1F] font-bold ">Explore the Destination</h2>
                        <h1 className="text-2xl font-bold">where you wanna go?</h1>
                    </div>
                    <div>
                        <button className="bg-[#5AC2B9] text-white pr-4 pl-4 ml-20 pt-2 pb-2 rounded-lg"> <img src="/create.svg" className="w-8 inline-block pr-2"/>create new destination</button>
                    </div>
                    <div className="flex justify-around mt-10 ml-10">
                        
                        <div className="w-[400px] border p-1 border-[#84EDFC] rounded-3xl p-5 hover:bg-cyan-200">
                        <img src="/jijel.webp" />
                        <h1 className="text-xl font-bold text-[#34C2FB]">Jijel</h1>
                        <h3 className="pt-2"> <span className="font-semibold">price</span> : 20000 <span className="font-bold">DA</span></h3>
                        <h4 className="font-light grey-400 pt-2"><span className="font-bold">description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Totam optio consequatur iure, nemo dolorum nobis? </h4>
                        <div className="flex">
                            <button className="bg-[#5AC2B9] text-white pr-4 pl-4 ml-2 mt-2 pt-2 pb-2 rounded-lg flex"> <img src="/delete.svg" className="w-5 mr-2"/>delete</button>
                            <button className="bg-[#5AC2B9] text-white pr-4 pl-4 ml-2 mt-2 pt-2 pb-2 rounded-lg flex"> <img src="/add.svg" className="w-5 mr-2"/>update</button>
                        </div>
                        </div>
                        <div className="w-[400px] border p-1 border-[#84EDFC] rounded-3xl p-5 hover:bg-cyan-200">
                        <img src="/oran.jpg" />
                        <h1 className="text-xl font-bold text-[#34C2FB]">Oran</h1>
                        <h3 className="pt-2"> <span className="font-semibold">price</span> : 340000 <span className="font-bold">DA</span></h3>
                        <h4 className="font-light grey-400 pt-2"><span className="font-bold">description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Totam optio consequatur iure, nemo dolorum nobis? </h4>
                        <div className="flex">
                            <button className="bg-[#5AC2B9] text-white pr-4 pl-4 ml-2 mt-2 pt-2 pb-2 rounded-lg flex"> <img src="/delete.svg" className="w-5 mr-2"/>delete</button>
                            <button className="bg-[#5AC2B9] text-white pr-4 pl-4 ml-2 mt-2 pt-2 pb-2 rounded-lg flex"> <img src="/add.svg" className="w-5 mr-2"/>update</button>
                        </div>
                        
                        </div>
                        <div className="w-[400px] border p-1 border-[#84EDFC] rounded-3xl p-5  hover:bg-cyan-200">
                        <img src="/shara.jpg" />
                        <h1 className="text-xl font-bold text-[#34C2FB]">Sahara</h1>
                        <h3 className="pt-2"> <span className="font-semibold">price</span> : 50000 <span className="font-bold">DA</span></h3>
                        <h4 className="font-light grey-400 pt-2"><span className="font-bold">description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Totam optio consequatur iure, nemo dolorum nobis? </h4>

                        <div className="flex">
                            <button className="bg-[#5AC2B9] text-white pr-4 pl-4 ml-2 mt-2 pt-2 pb-2 rounded-lg flex"> <img src="/delete.svg" className="w-5 mr-2"/>delete</button>
                            <button className="bg-[#5AC2B9] text-white pr-4 pl-4 ml-2 mt-2 pt-2 pb-2 rounded-lg flex"> <img src="/add.svg" className="w-5 mr-2"/>update</button>
                        </div>
                        </div>

                    </div>
                <div className="bg-[#F5FCFE] h-[300px] mt-10 flex justify-around">
                <div className="pt-10 border-r-2 border-[red] mt-10 mb-10 pr-10">
                    <h1 className="text-[red] text-xl font-bold">contact</h1>
                    <p>abdelrahmane : 0782311341</p>
                    <p>amine : 078290163</p>
                </div>
                <div className="pt-10 border-r-2 border-[red] mt-10 mb-10 pr-10">
                    <h1 className="text-[red] text-xl font-bold ">emails</h1>
                    <p>abdelrahmane : aouakliabdelrahmane@gmail.com</p>
                    <p>amine : amineraged@gmail.com</p>

                </div>
                <div className="pt-10  border-[red] mt-10 mb-10 ">
                    <h1 className="text-[red] text-xl font-bold ">Quick link</h1>
                    <p>instagram : abdelrahman__ </p>
                    <p>snap : Amine__</p>

                </div>
                </div>

                </div>








            </div>
        </>
    )


}
export default Page;