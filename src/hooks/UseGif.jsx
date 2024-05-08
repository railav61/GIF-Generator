import { useEffect, useState } from "react";
import axios from "axios";
function UseGif(search) {
  const API_KEY = "CvuC6o6bJQlf25WCLe46qc4aWo43GYxn";
  const [gif, setGif] = useState("");
  const [loading, setloading] = useState(false);

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const searchedurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${search}`;

  async function fetchdata(search) {
    setloading(true);
    const output = await axios.get(search ? `${url}&tag=${search}` : url);
    const gifurl = output.data.data.images.downsized_large.url;
    setGif(gifurl);
    setloading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);
  return { gif, loading, fetchdata };
}
export default UseGif;
