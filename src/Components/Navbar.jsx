import React from "react";


let Navbar = ({data})=>{
    return(
        <>
            <div className="w-full px-2 py-3 flex justify-between items-center">
                <h3 className="text-orange-900 font-bold text-lg">Orange</h3>
                <div className="flex p-2 px-4 duration-300 bg-orange-600 hover:bg-orange-500 rounded-md text-white gap-3 text-sm font-semibold cursor-pointer">
                    <h3>Favourites</h3>
                    <h4>{data.filter(item => item.added).length}</h4>
                </div>
            </div>
        </>
    )
}

export default Navbar;