import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";
function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full h-20 bg-violet-50"></div>
      <div className="w-full h-20 bg-violet-100"></div>
      <div className="w-full h-20 bg-violet-200"></div>
      <div className="w-full h-20 bg-violet-300"></div>
      <div className="w-full h-20 bg-violet-400"></div>
      <div className="w-full h-20 bg-violet-500"></div>
      <div className="w-full h-20 bg-violet-600"></div>
      <div className="w-full h-20 bg-violet-700"></div>
      <div className="w-full h-20 bg-violet-800"></div>
      <div className="w-full h-20 bg-violet-900"></div>
      <div className="absolute flex flex-col items-center">
        <h1 className="my-6 bg-violet-400 w-[1200px] font-medium text-lg text-center py-2 rounded-lg border-2 border-black">
          RANDOM GIFS
        </h1>
        <div>
          <Random />
          <Tag />
        </div>
      </div>
    </div>
  );
}
export default App;
