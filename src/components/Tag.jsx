import Spin from "./Spin";
import { useState } from "react";
import UseGif from "../hooks/UseGif";
// const API_KEY = "";
function Tag() {
  const [search, setsearch] = useState("");
  const { gif, loading, fetchdata } = UseGif(search);

  return (
    <div className="flex items-center flex-col w-[500px] h-[350px] bg-violet-400 border-2 rounded-md border-black mt-5">
      <h1 className="font-medium text-xl mt-2 underline uppercase">
        Random {search} Gif
      </h1>
      {loading ? (
        <Spin />
      ) : (
        <img src={gif} alt="randomgif" className="w-[300px] h-[200px] mt-2" />
      )}
      <input
        className="w-[300px] bg-white text-lg rounded-md my-2 p-1 text-center"
        placeholder="Search a GIF here"
        onChange={(event) => setsearch(event.target.value)}
        value={search}
      />
      <button
        onClick={() => fetchdata(search)}
        className="bg-white w-[300px] p-1 font-medium text-lg rounded-md mt-2"
      >
        GENERATE
      </button>
    </div>
  );
}
export default Tag;
