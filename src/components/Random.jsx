import Spin from "./Spin";
import UseGif from "../hooks/UseGif";
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Random() {
  const { gif, loading, fetchdata } = UseGif();

  function clickhandler() {
    fetchdata();
  }

  return (
    <div className="flex items-center flex-col w-[500px] h-[300px] bg-violet-400 border-2 rounded-md border-black">
      <h1 className="font-medium text-xl mt-2 underline uppercase">
        A Random Gifs
      </h1>
      {loading ? (
        <Spin />
      ) : (
        <img src={gif} alt="randomgif" className="w-[300px] h-[200px] mt-2" />
      )}
      <button
        onClick={clickhandler}
        className="bg-white w-[300px] p-1 font-medium text-lg rounded-md mt-2"
      >
        GENERATE
      </button>
    </div>
  );
}
export default Random;
