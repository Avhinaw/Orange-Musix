import React from "react";


let Card = ({data, handleFav, idx}) =>{
    const {image, name, artist, added} = data;
    return(
    <>
        <div className="w-[20vw] bg-zinc-100 p-4 rounded-md flex gap-5 relative pb-8 mt-10">
            <div className="w-20 h-20 bg-orange-500 rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={image} />
            </div>
            <div >
                <h3 className="text-lg font-semibold leading-none">{name}</h3>
                <h6 className="text-sm">{artist}</h6>
            </div>
            <button onClick={()=> handleFav(idx)} className={`px-4 py-3 duration-300 ${added ? "bg-teal-600 hover:bg-teal-500" : "bg-orange-600 hover:bg-orange-500"} absolute text-white text-sm rounded-md font-semibold whitespace-nowrap translate-y-[50%] -translate-x-[50%] bottom-[0%] left-[50%]`}>{added ? "Favorite Song" : "Add to Favorite"}</button>
        </div>
    </>       
    )
}

export default Card;