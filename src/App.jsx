import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import HooksUse from "./components/HooksUse";
import Timer from "./components/Timer";
// import Calender from "./components/Calender";
import ToDo from "./components/ToDo";
import Gsappractice from "./components/Gsappractice";
import Alert from "./components/Alert";
import State from "./components/State";

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
        <Alert />
        <State />
        <Gsappractice />
        {/* <Calender/> */}

        <Timer />
        <HooksUse />
        <ToDo />
      </div>
      <div style={{ minHeight: "100vh" }} className=" ">
        <h1 className="text-center pt-100">API-Fetch</h1>
        <img style={{ width: "100%" }} src={first?.message} alt="imgs" />
      </div>
    </>
  );
}

export default App;
