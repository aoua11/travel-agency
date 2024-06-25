



function Navbar() {
    return (
        <>
            <header className="bg-[#FBFFFF]">
                <nav className="flex justify-between w-[80%] mx-auto">
                    <h1 className="p-3 text-xl">
                        World<span className="text-[#FF6C2C] font-bold ">Wide</span>
                    </h1>
                    <ul className="mr-20">
                        <li className="inline-block p-4 font-normal text-sm ">Home</li>
                        <li className="inline-block p-4 font-normal text-sm ">Destination</li>
                        <li className="inline-block p-4 font-normal text-sm ">About</li>
                        <li className="inline-block p-4 font-normal text-sm ">Contact</li>
                        <button className="bg-[#F57D1F] rounded pl-4 pr-4 text-white ml-5"><img src="./plane.svg" className="w-5 inline-block"/> Fly</button>
                    </ul>
                </nav>
            </header>


        </>
    )


}
export default Navbar; 