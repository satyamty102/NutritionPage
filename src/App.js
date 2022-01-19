// import logo from './logo.svg';
import "./App.css";
import Center1 from "./components/center1";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  //creating a state
  const [posts, setPosts] = useState("null");

  //making request using useEffect hook
  useEffect(() => {
    axios.get("https://www.boredapi.com/api/activity").then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div>
        {posts.activity}
        <Center1 title={posts.key} />
      </div>
    </>
  );
}

export default App;
