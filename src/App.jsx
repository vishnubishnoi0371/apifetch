import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import HooksUse from "./components/HooksUse";
import Timer from "./components/Timer";
import Calender from "./components/Calender";
import ToDo from "./components/ToDo";

function App() {
  const [first, setfirst] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((Response) => Response.json())
      .then((data) => setfirst(data));
  }, []);

  return (
    <>
      <div>
        {/* <Calender/> */}
        
        <Timer />
        <HooksUse />
        <ToDo />
      </div>
      <div style={{ minHeight: "100vh" }} className=" ">
        <img style={{ width: "100%" }} src={first?.message} alt="imgs" />
      </div>
    </>
  );
}

export default App;
